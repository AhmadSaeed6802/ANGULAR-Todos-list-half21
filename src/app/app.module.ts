import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDosComponent } from './MyComponents/to-dos/to-dos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodComponent } from './MyComponents/add-tod/add-tod.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    TodoItemComponent,
    AddTodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
