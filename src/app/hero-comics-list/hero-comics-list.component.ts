import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsService } from '../services/comics/comics.service';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-hero-comics-list',
  templateUrl: './hero-comics-list.component.html',
  styleUrls: ['./hero-comics-list.component.less']
})
export class HeroComicsListComponent implements OnInit {

  heroes :any;
  comics :any;

  @Input() comicTitle !:string;
  @Input() comicDate !:string;
  @Input() comicAuthors !:string;
  @Input() comicImg !:string;
  @Input() id !:number; //string

  constructor(private Hero: HeroService, private Comic: ComicsService, private activatedRoutes : ActivatedRoute) { }

  ngOnInit(): void {
    this.heroes = this.Hero.heroes;
    this.comics = this.Comic.comics;
    this.id = this.heroes.id;
  }

  
    // getComicsByHeroId(id :number, comics.id) 
  // {
  //   let tmp;
  //   for(const comic of this.comics) {
  //     if(comic.id == id ) {  //les id des heros sont dans un tableau
  //       tmp = hero;
  //     } 
  //   }
  //   return tmp;
  // }
}
