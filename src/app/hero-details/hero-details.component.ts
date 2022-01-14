import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero/hero.service';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.less']
})

export class HeroDetailsComponent implements OnInit 
{

  hero :any;
  @Input() heroBackGround !:string;
  @Input() id !:number; 

  constructor(private Hero: HeroService, private activatedRoutes : ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.hero = this.Hero.heroes;
    const id = this.activatedRoutes.snapshot.params['id'];
    this.hero = this.Hero.getHeroByName(id);
  }

  //TO DO add alerts with sweetAlerts2 lib.
  
  delete(hero :Hero) {
    this.Hero.delete(hero.heroName);
  }
}
