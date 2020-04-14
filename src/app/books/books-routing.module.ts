import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  BooksHeaderComponent,
  AddBookWatchitemComponent,
  BookDetailsComponent,
  BookRouteActivator,
  BooksComponent,
  MyBookWatchitemsComponent,
  BookAddNewBookComponent,
  BookAddNewBookReactComponent,
  BookAddOfferComponent
} from './index';
import { BooksResolver } from './books-resolver.service';

const bookRoutes: Routes = [
  {
    path: '',
    component: BooksHeaderComponent,
    resolve: { books: BooksResolver },
    children: [
      { path: '', component: BooksComponent },
      { path: 'new', component: AddBookWatchitemComponent, canDeactivate: ['canDeactivateAddBook'] },
      { path: 'offer/new', component: BookAddOfferComponent },
      { path: 'mybooks', component: MyBookWatchitemsComponent },
      { path: 'addbookreact', component: BookAddNewBookReactComponent },
      { path: 'addbook', component: BookAddNewBookComponent } ,
      { path: ':id', component: BookDetailsComponent, canActivate: [BookRouteActivator] }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
