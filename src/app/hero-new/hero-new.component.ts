import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.less']
})
export class HeroNewComponent implements OnInit {
  heroes :any = [];
  constructor(private Hero: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.Hero.heroes;
  }

  add() {
    
  }
}
