import { Todo, Action, ActionTypes } from '../actions';

// state will be an array of todos and if nothing is provided, just use an empty array
export const todosReducer = (state: Todo[] = [], action: Action) => {
	// the switch statement acts as a type guard
	switch (action.type) {
		case ActionTypes.fetchTodos:
			return action.payload;
		case ActionTypes.deleteTodo:
			return state.filter((todo: Todo) => todo.id !== action.payload);
		default:
			return state;
	}
};
