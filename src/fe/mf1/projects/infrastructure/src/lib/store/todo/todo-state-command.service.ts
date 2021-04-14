import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ITodoStateCommand, TodoItem, TodoModuleState } from "projects/core/src/public-api";
import { addTodo, deleteTodo, editTodo, filterList, refresh } from "./todo.actions";

@Injectable()
export class TodoStateCommand implements ITodoStateCommand {
    constructor(private store: Store<{ todo: TodoModuleState }>) {
    }
    filterList(filter: any): void {
        this.store.dispatch(filterList({ item: filter }));
    }

    refresh(): void {
        this.store.dispatch(refresh());
    }

    add(item: TodoItem): void {
        this.store.dispatch(addTodo({ item: { ...item, isCompleted: false } }));
    }
    edit(item: TodoItem): void {
        this.store.dispatch(editTodo({ item: { ...item } }));
    }
    delete(id: number): void {
        this.store.dispatch(deleteTodo({ id }));
    }

}