import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserEditComponent } from './users/user-edit.component';
import { GamesComponent } from './games/games.component';
import { MoviesComponent } from './movies/movies.component';
import { BooksComponent } from './books/books.component';
import { MusicComponent } from './music/music.component';
import { WatchlistAppComponent } from './watchlist-app.component';
import { GamesListComponent } from './games/games-list.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    WatchlistAppComponent,
    UserEditComponent,
    GamesComponent,
    MoviesComponent,
    BooksComponent,
    MusicComponent,
    GamesListComponent,
    TvshowsComponent
  ],
  bootstrap: [WatchlistAppComponent]
})

export class AppModule { }
