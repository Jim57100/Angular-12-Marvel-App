import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  heroes = [
    {
      heroName: 'Ant Man',
      description: 'hero1',
      characterImg: 'https://lumiere-a.akamaihd.net/v1/images/avengers-characterthumbnail-antman_040c3e53.jpeg?region=0%2C0%2C300%2C300',
      isFavorite: false
    },
    {
      heroName: 'Thor',
      description: 'hero2',
      characterImg: 'https://i.kym-cdn.com/photos/images/original/001/964/578/fe7',
      isFavorite: false
    },
    {
      heroName: 'Iron Man',
      description: 'hero3',
      characterImg: 'https://static.zerochan.net/Iron.Man.%28Character%29.full.2106668.jpg',
      isFavorite: false
    }
  ];

  // goToPage(pageName:string) :void 
  // {
  //   this.router.navigate([`${pageName}`]);
  // }

  setFavorite() {
    for(const hero of this.heroes) {
      hero.isFavorite = true;
      // return 'rgba(238,23,31, 0.3)';
    }
  }

  setNoFavorite() {
    for(const hero of this.heroes) {
      hero.isFavorite = false;
      // return 'rgb(255,255,255)';
    }
  }
}
