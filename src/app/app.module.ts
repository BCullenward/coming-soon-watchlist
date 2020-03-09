import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserEditComponent } from './users/user-edit.component';
import { GamesComponent } from './games/games.component';
import { MoviesComponent } from './movies/movies.component';
import { BooksComponent, BookThumbnailComponent } from './books/index';
import { MusicComponent } from './music/music.component';
import { WatchlistAppComponent } from './watchlist-app.component';
import { GamesListComponent } from './games/games-list.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  declarations: [
    WatchlistAppComponent,
    UserEditComponent,
    GamesComponent,
    MoviesComponent,
    BooksComponent,
    MusicComponent,
    GamesListComponent,
    TvshowsComponent,
    BookThumbnailComponent,
    NavComponent
  ],
  bootstrap: [WatchlistAppComponent]
})

export class AppModule { }
