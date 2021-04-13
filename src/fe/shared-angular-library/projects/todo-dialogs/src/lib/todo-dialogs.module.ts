import { NgModule } from '@angular/core';
import { TodoCreateViewComponent } from './components/todo-create-view/todo-create-view.component';
import { TodoEditViewComponent } from './components/todo-edit-view/todo-edit-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    TodoCreateViewComponent,
    TodoEditViewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    TodoCreateViewComponent,
    TodoEditViewComponent
  ]
})
export class TodoDialogsModule { }
