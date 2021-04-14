import { createReducer, on } from '@ngrx/store';
import { TodoListFilter, TodoModuleState } from 'projects/core/src/public-api';
import { filterList, refreshList } from './todo.actions';

export const initialState: TodoModuleState = <TodoModuleState>{
    filter: <TodoListFilter>{
        isCompleted: undefined,
        text: undefined
    },
    todoItemsList: []

};

const _todoReducer = createReducer(
    initialState,
    on(refreshList, (state, action) => ({ ...state, todoItemsList: action.items })),
    on(filterList, (state, action) => ({ ...state, filter: action.item }))
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}