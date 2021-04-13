import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoCreateViewComponent } from './todo-create-view/todo-create-view.component';
import { TodoCreateContainerComponent } from './todo-create-container/todo-create-container.component';
import { TodoEditContainerComponent } from './todo-edit-container/todo-edit-container.component';
import { TodoEditViewComponent } from './todo-edit-view/todo-edit-view.component';



@NgModule({
  declarations: [
    TodoCreateViewComponent,
    TodoCreateContainerComponent,
    TodoEditContainerComponent,
    TodoEditViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports:[
    TodoCreateContainerComponent,
    TodoEditContainerComponent
  ]
})
export class TodoDialogModule { }
