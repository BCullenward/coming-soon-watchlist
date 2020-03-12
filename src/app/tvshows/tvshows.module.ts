import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowBodyComponent } from './tvshow-body/tvshow-body.component';
import { TvShowDetailsComponent } from './tvshow-details/tvshow-details.component';
import { TvShowHeaderComponent } from './tvshow-header/tvshow-header.component';
import { TvShowThumbnailComponent } from './tvshow-thumbnail/tvshow-thumbnail.component';
import { TvShowWatchlistComponent } from './tvshow-watchlist/tvshow-watchlist.component';
import { NavTvShowsComponent } from './nav-tvshows/nav-tvshows.component';
import { SharedComponent } from './shared/shared.component';
import { TvShowsRoutingModule } from './tvshows-routing.module';
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
    TvShowsRoutingModule
  ],
  declarations: [
    TvShowBodyComponent,
    TvShowDetailsComponent,
    TvShowHeaderComponent,
    TvShowThumbnailComponent,
    TvShowWatchlistComponent,
    NavTvShowsComponent,
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
export class TvShowsModule { }

//export function checkDirtyState(component: AddBookWatchitemComponent) {
//  if (component.isDirty)
//    return window.confirm("You have not saved this watch item, do you really want to cancel?");
//  return true;
//}
