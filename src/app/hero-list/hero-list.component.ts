import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.less']
})
export class HeroListComponent implements OnInit {


  heroes = [
    {
      heroName: 'Ant Man',
      description: 'hero1',
      characterImg: 'https://w7.pngwing.com/pngs/1021/64/png-transparent-marvel-comics-antman-poster-ant-man-captain-america-hank-pym-wasp-ant-man-superhero-fictional-character-film-thumbnail.png'
    },
    {
      heroName: 'Thor',
      description: 'hero2',
      characterImg: 'https://i.kym-cdn.com/photos/images/original/001/964/578/fe7'
    },
    {
      heroName: 'Iron Man',
      description: 'hero3',
      characterImg: 'https://static.zerochan.net/Iron.Man.%28Character%29.full.2106668.jpg'
    },
    {
      heroName: 'Black Panther',
      description: 'hero4',
      characterImg: 'https://w7.pngwing.com/pngs/957/317/png-transparent-blackpanther-superhero-black-panther-captain-america-iron-man-ant-man-sharon-carter-avengers-role-superhero-fictional-character-alliance-thumbnail.png'
    },
    {
      heroName: 'Hulk',
      description: 'hero5',
      characterImg: 'https://w7.pngwing.com/pngs/347/781/png-transparent-hulk-marvel-heroes-2016-black-widow-clint-barton-captain-america-hulk-the-incredible-hulk-illustration-comics-avengers-superhero-thumbnail.png'
    },
    {
      heroName: 'Vision',
      description: 'hero6',
      characterImg: 'https://w7.pngwing.com/pngs/469/438/png-transparent-marvel-vision-vision-iron-man-thor-ultron-marvel-vision-s-avengers-fictional-character-film-thumbnail.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
