import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroNewComponent } from './hero-new/hero-new.component';
import { HeroModifComponent } from './hero-modif/hero-modif.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroComicsListComponent } from './hero-comics-list/hero-comics-list.component';
import { HeroSeriesListComponent } from './hero-series-list/hero-series-list.component';
import { HeroFilmListComponent } from './hero-film-list/hero-film-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'herolist',
    component: HeroListComponent
  },
  {
    path: 'hero/:id',
    component: HeroDetailsComponent
  },
  {
    path: 'new',
    component: HeroNewComponent
  },
  {
    path: 'modif/:id',
    component: HeroModifComponent
  },
  {
    path: 'comics/:id',
    component: HeroComicsListComponent
  },
  {
    path: 'films/:id',
    component: HeroFilmListComponent
  },
  {
    path: 'series/:id',
    component: HeroSeriesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
