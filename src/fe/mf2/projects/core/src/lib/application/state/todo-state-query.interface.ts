import { Observable } from "rxjs";
import { TodoItem, TodoListFilter } from "../../domain";

export interface ITodoStateQuery {
    getFilter(): Observable<TodoListFilter>;
    getList(): Observable<TodoItem[]>;
}