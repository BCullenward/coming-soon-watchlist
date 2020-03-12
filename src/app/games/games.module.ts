import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBodyComponent } from './game-body/game-body.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameHeaderComponent } from './game-header/game-header.component';
import { GameThumbnailComponent } from './game-thumbnail/game-thumbnail.component';
import { GameWatchlistComponent } from './game-watchlist/game-watchlist.component';
import { NavGamesComponent } from './nav-games/nav-games.component';
import { SharedComponent } from './shared/shared.component';
import { GamesRoutingModule } from './games-routing.module';
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
    GamesRoutingModule
  ],
  declarations: [
    //NavBooksComponent,
    //BooksComponent,
    //BookThumbnailComponent,
    //BookDetailsComponent,
    //AddBookWatchitemComponent,
    //BooksHeaderComponent
  GameBodyComponent,
    GameDetailsComponent,
    GameHeaderComponent,
    GameThumbnailComponent,
    GameWatchlistComponent,
    NavGamesComponent,
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
export class GamesModule { }

//export function checkDirtyState(component: AddBookWatchitemComponent) {
//  if (component.isDirty)
//    return window.confirm("You have not saved this watch item, do you really want to cancel?");
//  return true;
//}
