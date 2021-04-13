import { createAction, props } from '@ngrx/store';
import { TodoItemProp } from '../models/todo-item-prop.interface';
import { TodoItem } from '../models/todo-item.interface';
import { TodoListFilter } from '../models/todo-list-filter.interface';

export const addTodo = createAction('[Todo Module] Add Todo', props<TodoItemProp>());
export const refresh = createAction('[Todo Module] Refresh');
export const refreshList = createAction('[Todo Module] Refresh Todo list', props<{ items: TodoItem[] }>());
export const deleteTodo = createAction('[Todo Module] Delete Todo', props<{ id: number }>());
export const editTodo = createAction('[Todo Module] Edit Todo', props<TodoItemProp>());
export const requestFailed = createAction('[Todo Module] Request Failed', props<{ error: any }>());
export const filterList = createAction('[Todo Module] Filter List', props<{ item: TodoListFilter }>())