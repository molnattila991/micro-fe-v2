import { TodoItem } from "projects/core/src/public-api";
import { TodoListFilter } from "./todo-list-filter.interface";

export interface TodoModuleState {
    todoItemsList: TodoItem[],
    filter: TodoListFilter
}