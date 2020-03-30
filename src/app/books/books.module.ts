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
  BookAddNewBookComponent,
  BookAddNewBookReactComponent
} from './index';
import { BooksRoutingModule } from './books-routing.module';
import { BooksResolver } from './books-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DigitOnlyModule } from '../common/digit-only.module';


@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DigitOnlyModule,
    NgSelectModule
  ],
  declarations: [
    NavBooksComponent,
    BooksComponent,
    BookThumbnailComponent,
    BookDetailsComponent,
    AddBookWatchitemComponent,
    BooksHeaderComponent,
    MyBookWatchitemsComponent,
    BookAddNewBookComponent,
    BookAddNewBookReactComponent
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
