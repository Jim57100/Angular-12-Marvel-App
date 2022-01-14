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
  addAlert:boolean = false;

  public hero !:Hero; //modele

  constructor(private Hero: HeroService) { }

  ngOnInit(): void 
  {
    this.hero = new Hero();
  }

  addHero() 
  {
    this.Hero.saveNewHero(this.hero).then(()=>{
      this.addAlert = true;
      this.hero = new Hero();
    }).catch(() => console.log('failed'))
  }


}
