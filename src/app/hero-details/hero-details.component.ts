import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero/hero.service';
import { ComicsService } from '../services/comics/comics.service';
import { FilmService } from '../services/film/film.service';
import { SeriesService } from '../services/series/series.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.less']
})

export class HeroDetailsComponent implements OnInit {

  hero :any = [];
  @Input() heroBackGround !:string;

  constructor(private Hero: HeroService, private Comic: ComicsService, private Movie: FilmService, private Serie: SeriesService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.hero = this.Hero.heroes;
    const id = this.router.snapshot.params['id'];
    this.hero = this.Hero.getHeroById(id);
  }


}
