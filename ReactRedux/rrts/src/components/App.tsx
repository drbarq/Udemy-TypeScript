import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[];
	fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
	componentDidMount() {
		this.props.fetchTodos();
	}

	render() {
		console.log(this.props.todos);
		return <div>Hi There!</div>;
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
export const App = connect(mapStateToProps, { fetchTodos })(_App);
