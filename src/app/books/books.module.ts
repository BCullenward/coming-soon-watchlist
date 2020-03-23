import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BookRouteActivator,
  AddBookWatchitemComponent,
  BooksComponent,
  BookThumbnailComponent,
  BookDetailsComponent,
  NavBooksComponent,
  BooksHeaderComponent,
  MyBookWatchitemsComponent,
  BookAddNewBookComponent
} from './index';
import { BooksRoutingModule } from './books-routing.module';
import { BooksResolver } from './books-resolver.service';


@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [
    NavBooksComponent,
    BooksComponent,
    BookThumbnailComponent,
    BookDetailsComponent,
    AddBookWatchitemComponent,
    BooksHeaderComponent,
    MyBookWatchitemsComponent,
    BookAddNewBookComponent
  ],
  providers: [
    BookRouteActivator,
    {
      provide: 'canDeactivateAddBook',
      useValue: checkDirtyState
    },
    BooksResolver
  ]
})
export class BooksModule { }

export function checkDirtyState(component: AddBookWatchitemComponent) {
  if (component.isDirty)
    return window.confirm("You have not saved this watch item, do you really want to cancel?");
  return true;
}
