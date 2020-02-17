import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { App } from './components/App';
import { reducers } from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);

// functional component example
// const App = (props: AppProps): JSX.Element => {
// 	return <div>{props.color}</div>;
// };

// interface AppProps {
// 	color?: string;
// }

// class App extends React.Component<AppProps> {
// 	state = { counter: 0 };

// 	onIncrement = (): void => {
// 		this.setState({ counter: this.state.counter + 1 });
// 	};

// 	onDecrement = (): void => {
// 		this.setState({ counter: this.state.counter - 1 });
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.onIncrement}>Increment</button>
// 				<button onClick={this.onDecrement}>Decrement</button>
// 				{this.state.counter}
// 			</div>
// 		);
// 	}
// }
// ReactDom.render(<App color="red" />, document.querySelector('#root'));
