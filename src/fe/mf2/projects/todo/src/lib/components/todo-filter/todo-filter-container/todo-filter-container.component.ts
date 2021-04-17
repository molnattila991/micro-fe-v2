import { Component, Inject, OnInit } from '@angular/core';
import { INJECTION_TOKEN, ITodoStateCommand } from 'projects/core/src/public-api';

@Component({
  selector: 'lib-todo-filter-container',
  templateUrl: './todo-filter-container.component.html',
  styleUrls: ['./todo-filter-container.component.css']
})
export class TodoFilterContainerComponent implements OnInit {

  constructor(@Inject(INJECTION_TOKEN.STATE.COMMAND.TODO) private store: ITodoStateCommand) { }

  ngOnInit(): void {
  }

  clear() {
    this.store.filterList({});
  }

  filter(text: string) {
    this.store.filterList({ text });
  }
}
