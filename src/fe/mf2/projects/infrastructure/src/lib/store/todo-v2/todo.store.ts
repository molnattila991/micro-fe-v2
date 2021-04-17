import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { TodoListFilter, TodoModuleState } from 'projects/core/src/public-api';

@Injectable()
@StoreConfig({
  name: 'todo-v2'
})
export class TodoStore extends Store<TodoModuleState> {

  constructor() {
    super(<TodoModuleState>
      {
        filter: <TodoListFilter>{
          isCompleted: undefined,
          text: undefined
        },
        todoItemsList: []
      });
  }
}
