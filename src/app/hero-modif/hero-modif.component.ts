import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-hero-modif',
  templateUrl: './hero-modif.component.html',
  styleUrls: ['./hero-modif.component.less']
})
export class HeroModifComponent implements OnInit 
{

  hero :any =null;
  change:boolean = false;
  // @Input() id !:string;     //Pas sur que cela sert à grand chose...
  // @Input() heroName !:string;
  // @Input() realName !:string;
  // @Input() gender !:string;
  // @Input() powers !:string;
  // @Input() affiliation !:string;
  // @Input() characterImg !:string;
  // @Input() thumbnails !:string;
  // @Input() description !:string;
  // @Input() backgroundImg !:string;
  // @Input() isFavorite !:boolean;

  constructor(private Hero:HeroService, private router : ActivatedRoute) { }

  ngOnInit(): void 
  {
    const id = this.router.snapshot.params['id'];  //récupère l'id transmis à la page ?
    this.hero = this.Hero.getHeroByName(id);         //????
    this.Hero.get(this.hero.heroName).subscribe((value: any) => {  //souscrit à l'action de changement
      console.log("coucou",value)
      this.hero = value;                           //attribut la valeur du changement au hero ??
    });
  }


  modif() 
  {
    this.Hero.update(this.hero).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}

