import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFilterContainerComponent } from './todo-filter-container/todo-filter-container.component';
import { TodoFilterViewComponent } from './todo-filter-view/todo-filter-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    TodoFilterContainerComponent,
    TodoFilterViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    TodoFilterContainerComponent
  ]
})
export class TodoFilterModule { }
