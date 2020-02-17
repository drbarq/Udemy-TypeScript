import React from 'react';
import ReactDom from 'react-dom';

interface AppProps {
	color?: string;
}

interface AppState {
	counter: number;
}

// using the constuctor method

class App extends React.Component<AppProps, AppState> {
	// state = { counter: 0 };
	constructor(props: AppProps) {
		super(props);
		// this.state; follows the interface definition
		this.state = { counter: 0 };
	}

	onIncrement = (): void => {
		this.setState({ counter: this.state.counter + 1 });
	};

	onDecrement = (): void => {
		this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		return (
			<div>
				<button onClick={this.onIncrement}>Increment</button>
				<button onClick={this.onDecrement}>Decrement</button>
				{this.state.counter}
			</div>
		);
	}
}

ReactDom.render(<App color="red" />, document.querySelector('#root'));
