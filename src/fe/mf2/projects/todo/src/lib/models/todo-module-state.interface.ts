import { TodoItem } from "./todo-item.interface";
import { TodoListFilter } from "./todo-list-filter.interface";

export interface TodoModuleState {
    todoItemsList: TodoItem[],
    filter: TodoListFilter
}