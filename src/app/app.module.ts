import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WatchlistAppComponent } from './watchlist-app.component';
import { NavComponent } from './nav/nav.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/error404.component';
import { AuthService } from './users/auth.service';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    WatchlistAppComponent,
    NavComponent,
    Error404Component,
    MainComponent,
  ],
  providers: [
    ToastrService,
    AuthService
  ],
  bootstrap: [WatchlistAppComponent]
})

export class AppModule { }


