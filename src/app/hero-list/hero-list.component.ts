import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero/hero.service';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.less']
})

export class HeroListComponent implements OnInit 
{

  heroes :any;

  constructor(private Hero: HeroService) { }

  ngOnInit(): void 
  {
    // this.heroes = this.Hero.heroes;
    this.Hero.getAllHeroes().subscribe((data: any) => {
      this.heroes = data;
    });
  }
 
  readData() {

  }
}
