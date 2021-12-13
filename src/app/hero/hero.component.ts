import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../../app/services/hero/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent implements OnInit {

  @Input() heroName :string = '';
  @Input() description :string = '';
  @Input() characterImg :string = '';
  @Input() bgImageVariable :string = "../../src/assets/img/heroListBG.png";
  // @Input() isFavorite :boolean = false;
  
  heroes :any = [];

  constructor(private router: Router, private Hero: HeroService) { 
  }

  ngOnInit(): void 
  {
   
  }

  goToPage(pageName:string) :void 
  {
    this.router.navigate([`${pageName}`]);
  }

  favorite() {
    this.heroes.isFavorite === false ?  this.Hero.setFavorite() : this.Hero.setNoFavorite();  
  }

}
