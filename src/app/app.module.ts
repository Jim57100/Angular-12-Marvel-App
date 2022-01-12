import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComicsListComponent } from './hero-comics-list/hero-comics-list.component';
import { HeroSeriesListComponent } from './hero-series-list/hero-series-list.component';
import { HeroNewComponent } from './hero-new/hero-new.component';
import { HeroModifComponent } from './hero-modif/hero-modif.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { HeroService } from './services/hero/hero.service';

import { environment } from '../environments/environment';

import { AngularFireModule} from '@angular/fire' ;
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HeroFilmListComponent } from './hero-film-list/hero-film-list.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    HeroComicsListComponent,
    HeroSeriesListComponent,
    HeroNewComponent,
    HeroModifComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent,
    HeroDetailsComponent,
    HeroFilmListComponent,
    UploadDetailsComponent,
    UploadFormComponent,
    UploadListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
