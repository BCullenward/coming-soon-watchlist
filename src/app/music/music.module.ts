import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicBodyComponent } from './music-body/music-body.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicHeaderComponent } from './music-header/music-header.component';
import { MusicThumbnailComponent } from './music-thumbnail/music-thumbnail.component';
import { MusicWatchlistComponent } from './music-watchlist/music-watchlist.component';
import { NavMusicComponent } from './nav-music/nav-music.component';
import { SharedComponent } from './shared/shared.component';
import { MusicRoutingModule } from './music-routing.module';
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
    MusicRoutingModule
  ],
  declarations: [
    MusicBodyComponent,
    MusicDetailsComponent,
    MusicHeaderComponent,
    MusicThumbnailComponent,
    MusicWatchlistComponent,
    NavMusicComponent,
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
export class MusicModule { }

//export function checkDirtyState(component: AddBookWatchitemComponent) {
//  if (component.isDirty)
//    return window.confirm("You have not saved this watch item, do you really want to cancel?");
//  return true;
//}
