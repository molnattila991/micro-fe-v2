import { NgModule } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoQuery } from './todo.query';
import { INJECTION_TOKEN } from 'projects/core/src/public-api';
import { TodoStore } from './todo.store';



@NgModule({
providers:[
  TodoStore,
  TodoQuery,
  TodoService, 
  {provide: INJECTION_TOKEN.STATE.COMMAND.TODO, useExisting: TodoService},
  {provide: INJECTION_TOKEN.STATE.QUERY.TODO, useExisting: TodoQuery}
]
})
export class TodoV2StateModule { }
