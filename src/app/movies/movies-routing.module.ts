import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { MoviesComponent } from './movies.component';
//import {
//  BooksHeaderComponent,
//  AddBookWatchitemComponent,
//  BookDetailsComponent,
//  BookRouteActivator,
//  BooksComponent
//} from './index';
//import { BooksResolver } from './books-resolver.service';

const movieRoutes: Routes = [
  {
    path: '',
    component: MovieHeaderComponent,
    //resolve: { books: BooksResolver },
    children: [
      { path: '', component: MoviesComponent }
    //  { path: 'new', component: AddBookWatchitemComponent, canDeactivate: ['canDeactivateAddBook'] },
    //  { path: ':id', component: BookDetailsComponent, canActivate: [BookRouteActivator] }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(movieRoutes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
