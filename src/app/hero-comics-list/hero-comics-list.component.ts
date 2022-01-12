import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private Hero: HeroService, private Comic: ComicsService,) { }

  ngOnInit(): void {
    this.heroes = this.Hero.heroes;
    this.comics = this.Comic.comics;
    this.id = this.heroes.id;
  }

}
