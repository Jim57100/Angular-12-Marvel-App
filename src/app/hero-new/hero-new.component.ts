import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.less']
})
export class HeroNewComponent implements OnInit 
{

  hero :any = [];

  constructor(private Hero: HeroService) { }

  ngOnInit(): void 
  {
    // this.heroes = this.Hero.heroes;
    this.hero = new Hero();
  }

  add() 
  {
    this.Hero.saveNewHero(this.hero).subscribe(()=>{
      this.hero = new Hero();
    });
  }


}
