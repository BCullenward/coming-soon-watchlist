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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatPaginatorModule,
    AngularMaterialModule
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
  exports: [
    MatPaginatorModule
  ],
  bootstrap: [WatchlistAppComponent]
})

export class AppModule { }


