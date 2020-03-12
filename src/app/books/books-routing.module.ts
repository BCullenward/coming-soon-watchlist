import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  BooksHeaderComponent,
  AddBookWatchitemComponent,
  BookDetailsComponent,
  BookRouteActivator,
  BooksComponent
} from './index';
import { BooksResolver } from './books-resolver.service';
import { MyBookWatchitemsComponent } from './book-watchlist/my-book-watchitems.component';

const bookRoutes: Routes = [
  {
    path: '',
    component: BooksHeaderComponent,
    resolve: { books: BooksResolver },
    children: [
      { path: '', component: BooksComponent },
      { path: 'new', component: AddBookWatchitemComponent, canDeactivate: ['canDeactivateAddBook'] },
      { path: 'mybooks', component: MyBookWatchitemsComponent },
      { path: ':id', component: BookDetailsComponent, canActivate: [BookRouteActivator] }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
