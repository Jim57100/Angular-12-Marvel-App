import { Component, OnInit } from '@angular/core';
import { HeroService } from './services/hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  title = 'The Hero list';
  heroes :any = [];
  
  constructor(private Hero: HeroService) {
   
  }

  ngOnInit() {
    this.heroes = this.Hero.heroes;
  }

  favorite() {
    this.heroes.isFavorite === false ?  this.Hero.setFavorite() : this.Hero.setNoFavorite();  
  }
 

  // getBackGroundImg(GET['routerLink']) {
  //   switch (GET['routerLink']) {
  //     case '':
  //       return '';
  //       break;
  //     case 'hero-list':
  //       return '';
  //     case 'hero-details':
  //       return ;
  //     default:
  //       break;
  //   }
  // }
} 
