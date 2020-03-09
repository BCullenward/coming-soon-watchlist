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
import { NavComponent } from './nav/nav.component';
import { BookService } from './books/shared/book.service';
import { ToastrService } from './common/toastr.service';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
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
    NavComponent,
    BookDetailsComponent
  ],
  providers: [
    BookService,
    ToastrService
  ],
  bootstrap: [WatchlistAppComponent]
})

export class AppModule { }
