import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../../app/services/hero/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent implements OnInit {
  
  heroes :any;
  
  @Input() heroName !:string;
  @Input() characterImg !:string;
  @Input() isFavorite !:boolean;
  @Input() id !:number; //string

  constructor(private router: Router, private Hero: HeroService) { }

  ngOnInit(): void 
  {
    this.heroes = this.Hero.heroes;
  }

  goToPage(pageName:string) :void 
  {
    this.router.navigate([ pageName, this.id ]);
  }

  onSwitch(id :number) 
  {
    console.log(id);
    return this.heroes[id].isFavorite = !this.heroes[id].isFavorite;
  }

}
