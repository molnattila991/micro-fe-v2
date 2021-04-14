import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { INJECTION_TOKEN } from 'projects/core/src/public-api';
import { TodoStateCommand } from './todo-state-command.service';
import { TodoStateQuery } from './todo-state-query.service';
import { TodoEffects } from './todo.effects';
import { todoReducer } from './todo.reducer';

@NgModule({
  imports:[
    StoreModule.forFeature("todo", todoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [
    { provide: INJECTION_TOKEN.STATE.COMMAND.TODO, useClass: TodoStateCommand },
    { provide: INJECTION_TOKEN.STATE.QUERY.TODO, useClass: TodoStateQuery },
  ]
})
export class TodoStateModule { }
