import { Routes } from '@angular/router';
import { Error404Component } from './errors/error404.component';

export const appRoutes: Routes = [
  { path: '404', component: Error404Component },
  { path: 'books', loadChildren: () => import('./books/books.module').then(b => b.BooksModule) },
  { path: 'users', loadChildren: () => import('./users/user.module').then(u => u.UserModule) },
  { path: 'games', loadChildren: () => import('./games/games.module').then(g => g.GamesModule) },
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
  { path: 'music', loadChildren: () => import('./music/music.module').then(m => m.MusicModule) },
  { path: 'tvshows', loadChildren: () => import('./tvshows/tvshows.module').then(t => t.TvShowsModule) }
  //,
  //{ path: '', redirectTo: '/books', pathMatch: 'full' }
]
