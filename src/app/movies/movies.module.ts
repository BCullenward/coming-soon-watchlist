import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieBodyComponent } from './movie-body/movie-body.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MovieWatchlistComponent } from './movie-watchlist/movie-watchlist.component';
import { NavMoviesComponent } from './nav-movies/nav-movies.component';
import { SharedComponent } from './shared/shared.component';
import { MoviesRoutingModule } from './movies-routing.module';
//import {
//  BookRouteActivator,
//  AddBookWatchitemComponent,
//  BooksComponent,
//  BookThumbnailComponent,
//  BookDetailsComponent,
//  NavBooksComponent,
//  BooksHeaderComponent
//} from './index';
//import { BooksRoutingModule } from './books-routing.module';
//import { BooksResolver } from './books-resolver.service';


@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule

  ],
  declarations: [
    //NavBooksComponent,
    //BooksComponent,
    //BookThumbnailComponent,
    //BookDetailsComponent,
    //AddBookWatchitemComponent,
    //BooksHeaderComponent
  MovieBodyComponent,
    MovieDetailsComponent,
    MovieHeaderComponent,
    MovieThumbnailComponent,
    MovieWatchlistComponent,
    NavMoviesComponent,
    SharedComponent],
  providers: [
    //BookRouteActivator,
    //{
    //  provide: 'canDeactivateAddBook',
    //  useValue: checkDirtyState
    //},
    //BooksResolver
  ]
})
export class MoviesModule { }

//export function checkDirtyState(component: AddBookWatchitemComponent) {
//  if (component.isDirty)
//    return window.confirm("You have not saved this watch item, do you really want to cancel?");
//  return true;
//}
