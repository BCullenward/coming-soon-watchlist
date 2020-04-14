import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
  BookAddNewBookReactComponent,
  SalesInfoComponent,
  BookAddOfferComponent
} from './index';
import { BooksRoutingModule } from './books-routing.module';
import { BooksResolver } from './books-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DigitOnlyModule } from '../common/digit-only.module';
import { AngularMaterialModule } from '../angular-material.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DigitOnlyModule,
    NgSelectModule,
    HttpClientModule,
    AngularMaterialModule,
    MatPaginatorModule
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
    BookAddNewBookReactComponent,
    SalesInfoComponent,
    BookAddOfferComponent
  ],
  providers: [
    BookRouteActivator,
    {
      provide: 'canDeactivateAddBook',
      useValue: checkDirtyState
    },
    BooksResolver
  ],
  exports: [
    MatPaginatorModule
  ]
})
export class BooksModule { }

export function checkDirtyState(component: AddBookWatchitemComponent) {
  if (component.isDirty)
    return window.confirm("You have not saved this watch item, do you really want to cancel?");
  return true;
}
