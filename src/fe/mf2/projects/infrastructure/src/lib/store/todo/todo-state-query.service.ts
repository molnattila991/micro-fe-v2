import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ITodoStateQuery, TodoItem, TodoListFilter, TodoModuleState } from "projects/core/src/public-api";
import { Observable } from "rxjs";

@Injectable()
export class TodoStateQuery implements ITodoStateQuery {
    constructor(private store: Store<{ todo: TodoModuleState }>) {
    }

    getFilter(): Observable<TodoListFilter> {
        return this.store.select(item => item.todo.filter);
    }
    getList(): Observable<TodoItem[]> {
        return this.store.select(item => item.todo.todoItemsList);
    }

}