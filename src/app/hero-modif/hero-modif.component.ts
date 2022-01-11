import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-hero-modif',
  templateUrl: './hero-modif.component.html',
  styleUrls: ['./hero-modif.component.less']
})
export class HeroModifComponent implements OnInit {

  hero: any;

  

  constructor(private Hero:HeroService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.hero = this.Hero.getHeroById(id);
  }


}
