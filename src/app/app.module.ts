import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GamesComponent } from './games/games.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { WatchlistAppComponent } from './watchlist-app.component';
import { GamesListComponent } from './games/games-list.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { NavComponent } from './nav/nav.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/error404.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    WatchlistAppComponent,
    GamesComponent,
    MoviesComponent,
    MusicComponent,
    GamesListComponent,
    TvshowsComponent,
    NavComponent,
    Error404Component
  ],
  providers: [
    ToastrService
  ],
  bootstrap: [WatchlistAppComponent]
})

export class AppModule { }


