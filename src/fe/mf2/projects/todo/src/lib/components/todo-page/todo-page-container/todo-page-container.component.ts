import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { INJECTION_TOKEN, ITodoDialogService, UiState } from 'projects/core/src/public-api';

@Component({
  selector: 'lib-todo-page-container',
  templateUrl: './todo-page-container.component.html',
  styleUrls: ['./todo-page-container.component.css']
})
export class TodoPageContainerComponent implements OnInit, OnDestroy {

  opened$ = this.storeUI.select(state => state.ui.opened);

  constructor(
    private storeUI: Store<{ ui: UiState }>,
    @Inject(INJECTION_TOKEN.BUSINESS_LOGIC.TODO.CREATE_DIALOG) private dialog: ITodoDialogService
  ) { }

  ngOnDestroy(): void {
    this.dialog.unsubscribe();
  }

  ngOnInit(): void {
    this.dialog.subscribe();
  }

  openDialog(): void {
    this.dialog.open();
  }
}
