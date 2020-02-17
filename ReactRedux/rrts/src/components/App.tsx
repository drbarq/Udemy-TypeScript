import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[];
	// fetchTodos: typeof fetchTodos;  this is an error with redux thunk and connect, just say it will be a function
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}

interface AppState {
	fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);

		this.state = { fetching: false };
	}

	componentDidUpdate(prevProps: AppProps): void {
		if (!prevProps.todos.length && this.props.todos.length) {
			this.setState({ fetching: false });
		}
	}

	onButtonClick = (): void => {
		this.props.fetchTodos();
		this.setState({ fetching: true });
	};

	onTodoClick = (id: number): void => {
		this.props.deleteTodo(id);
	};

	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => {
			return (
				<div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
					{todo.title}
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.onButtonClick}>Fetch</button>
				{this.state.fetching ? ' LOADING' : null}
				{this.renderList()}
			</div>
		);
	}
}

// destructuring example state.todos
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

// const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
// 	return { todos: state.todos };
// };

// we dont want to export App we want to export connected App
// first (configuration)(_App)
export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
