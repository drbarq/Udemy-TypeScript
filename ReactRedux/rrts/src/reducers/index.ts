import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions/index';

export interface StoreState {
	todos: Todo[];
}

// allows us to make sure that the state object is set and stored as expected
export const reducers = combineReducers<StoreState>({
	todos: todosReducer
});
