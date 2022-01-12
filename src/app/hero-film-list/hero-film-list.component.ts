import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film/film.service';

@Component({
  selector: 'app-hero-film-list',
  templateUrl: './hero-film-list.component.html',
  styleUrls: ['./hero-film-list.component.less']
})
export class HeroFilmListComponent implements OnInit {

  films!:any;
  constructor(private Film: FilmService) {}


  ngOnInit(): void {
    this.films = this.Film.films;
    // this.Film.getAllFilms().subscribe((data: any) => {
    //   this.films = data;
    // });
  }

}
