import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowHeaderComponent } from './tvshow-header/tvshow-header.component';
import { TvShowsComponent } from './tvshows.component';
//import {
//  BooksHeaderComponent,
//  AddBookWatchitemComponent,
//  BookDetailsComponent,
//  BookRouteActivator,
//  BooksComponent
//} from './index';
//import { BooksResolver } from './books-resolver.service';

const tvshowRoutes: Routes = [
  {
    path: '',
    component: TvShowHeaderComponent,
    //resolve: { books: BooksResolver },
    children: [
      { path: '', component: TvShowsComponent }
    //  { path: 'new', component: AddBookWatchitemComponent, canDeactivate: ['canDeactivateAddBook'] },
    //  { path: ':id', component: BookDetailsComponent, canActivate: [BookRouteActivator] }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(tvshowRoutes)],
  exports: [RouterModule]
})
export class TvShowsRoutingModule { }
