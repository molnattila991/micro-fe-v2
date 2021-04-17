import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ITodoStateQuery, TodoItem, TodoListFilter, TodoModuleState } from 'projects/core/src/public-api';
import { Observable } from 'rxjs';
import { TodoStore } from './todo.store';

@Injectable({ providedIn: 'root' })
export class TodoQuery extends Query<TodoModuleState> implements ITodoStateQuery {
  constructor(protected store: TodoStore) {
    super(store);
  }
  getFilter(): Observable<TodoListFilter> {
    return this.select(item=>item.filter);
  }

  getList(): Observable<TodoItem[]> {
    return this.select(item=>item.todoItemsList);
  }

}
