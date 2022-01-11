import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComicsListComponent } from './hero-comics-list/hero-comics-list.component';
import { HeroSeriesListComponent } from './hero-series-list/hero-series-list.component';
import { HeroMoviesListComponent } from './hero-movies-list/hero-movies-list.component';
import { HeroNewComponent } from './hero-new/hero-new.component';
import { HeroModifComponent } from './hero-modif/hero-modif.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { HeroService } from './services/hero/hero.service';

import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire' ;
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    HeroComicsListComponent,
    HeroSeriesListComponent,
    HeroMoviesListComponent,
    HeroNewComponent,
    HeroModifComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent,
    HeroDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
