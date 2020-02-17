import { Todo, FetchTodosAction } from '../actions/index';
import { ActionTypes } from '../actions/types';

// state will be an array of todos and if nothing is provided, just use an empty array
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
	switch (action.type) {
		case ActionTypes.fetchTodos:
			return action.payload;
		default:
			return state;
	}
};
