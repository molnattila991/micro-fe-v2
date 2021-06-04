import { AfterViewInit, Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { initBus, addIFrame, subscribeMaster, createBusEventMaster } from "@molnarattila991/bus/lib";
import { TodoCreateViewComponent, TodoEditViewComponent } from "@molnarattila991/todo-dialogs"
import { AuthHandlerService } from './services/auth/auth-handler.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'shell';

  ngAfterViewInit(): void {
    initBus();

    addIFrame("mf1Frame");
    addIFrame("mf2Frame");

    subscribeMaster("todo-create-dialog-open", (data: any) => {
      this.openDialog();
    });

    subscribeMaster("todo-edit-dialog-open", (data: any) => {
      this.openEditDialog(data);
    });

    this.auth.login("attila@gmail.com", "AttilaaA?1")
      .subscribe(
          () => {
              console.log("User is logged in");
          }
      );
  }

  animal: string = "";
  name: string = "";

  constructor(public dialog: MatDialog
    , public auth: AuthHandlerService
    ) {

  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.viewContainerRef
    const dialogRef = this.dialog.open(TodoCreateViewComponent, {
      width: '350px',
      data: { title: "", description: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title && result.description)
        createBusEventMaster("todo-item-create", { ...result });
    });
  }

  openEditDialog(item: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.viewContainerRef
    const dialogRef = this.dialog.open(TodoEditViewComponent, {
      width: '350px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title && result.description && result.id)
        createBusEventMaster("todo-item-edit", { ...result });
    });
  }
}