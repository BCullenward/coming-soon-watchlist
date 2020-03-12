import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameHeaderComponent } from './game-header/game-header.component';
import { GamesComponent } from './games.component';
//import {
//  BooksHeaderComponent,
//  AddBookWatchitemComponent,
//  BookDetailsComponent,
//  BookRouteActivator,
//  BooksComponent
//} from './index';
//import { BooksResolver } from './books-resolver.service';

const gameRoutes: Routes = [
  {
    path: '',
    component: GameHeaderComponent,
    //resolve: { books: BooksResolver },
    children: [
      { path: '', component: GamesComponent }
    //  { path: 'new', component: AddBookWatchitemComponent, canDeactivate: ['canDeactivateAddBook'] },
    //  { path: ':id', component: BookDetailsComponent, canActivate: [BookRouteActivator] }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(gameRoutes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
