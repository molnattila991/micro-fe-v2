import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-todo-page-view',
  templateUrl: './todo-page-view.component.html',
  styleUrls: ['./todo-page-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPageViewComponent {
  @Input() opened: boolean | null = true;
  @Output() openDialog: EventEmitter<void> = new EventEmitter();

  constructor() { }

  openCreateDialog(): void {
    this.openDialog.emit();
  }
}
