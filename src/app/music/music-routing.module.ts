import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicHeaderComponent } from './music-header/music-header.component';
import { MusicComponent } from './music.component';
//import {
//  BooksHeaderComponent,
//  AddBookWatchitemComponent,
//  BookDetailsComponent,
//  BookRouteActivator,
//  BooksComponent
//} from './index';
//import { BooksResolver } from './books-resolver.service';

const musicRoutes: Routes = [
  {
    path: '',
    component: MusicHeaderComponent,
    //resolve: { books: BooksResolver },
    children: [
      { path: '', component: MusicComponent },
    //  { path: 'new', component: AddBookWatchitemComponent, canDeactivate: ['canDeactivateAddBook'] },
    //  { path: ':id', component: BookDetailsComponent, canActivate: [BookRouteActivator] }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(musicRoutes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
