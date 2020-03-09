import { BooksComponent } from './books';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { Routes } from '@angular/router';

export const appRoutes:Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' }

]
