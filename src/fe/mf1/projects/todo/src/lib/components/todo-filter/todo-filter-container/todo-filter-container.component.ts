import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoListFilter } from '../../../models/todo-list-filter.interface';
import { TodoModuleState } from '../../../models/todo-module-state.interface';
import { filterList } from '../../../store/todo.actions';

@Component({
  selector: 'lib-todo-filter-container',
  templateUrl: './todo-filter-container.component.html',
  styleUrls: ['./todo-filter-container.component.css']
})
export class TodoFilterContainerComponent implements OnInit {

  constructor(private store: Store<{ todo: TodoModuleState }>) { }

  ngOnInit(): void {
  }

  clear() {
    this.store.dispatch(filterList({ item: {} }));
  }

  filter(text: string) {
    this.store.dispatch(filterList({ item: { text } }));
  }
}
