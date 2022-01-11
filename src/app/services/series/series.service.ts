import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  series = [
    {
      id: 1,
      hero_id: 3,
      title: 'Marvel\'s Iron Fist',
      year: 2017,
      image: '../../../assets/img/series/ironfist.jpg',
    },
    {
      id: 2,
      hero_id: 5,
      title: 'The Incredible Hulk',
      year: 1978,
      image: '../../../assets/img/series/hulk_tv.jpg',
    },
    {
      id: 3,
      hero_id: [15, 6],
      title: 'Wenda Vision',
      year: 2021,
      image: '../../../assets/img/series/wenda_vision.jpg',
    },
    {
      id: 4,
      hero_id: 9,
      title: 'Captain America',
      year: 1979,
      image: '../../../assets/img/series/capt_am_tv.jpg',
    },
    {
      id: 5,
      hero_id: 12,
      title: 'Hawkeye',
      year: '2021',
      image: '../../../assets/img/series/hawk.jpg',
    },
    {
      id: 6,
      hero_id: [13, 7, 2],
      title: 'Guardians of the Galaxy (2015)',
      year: 2015,
      image: '../../../assets/img/series/guard_tv.jpg',
    },
    {
      id: 7,
      hero_id: 14,
      title: 'Spider-Man',
      year: 1967,
      image: '../../../assets/img/series/spider1967.jpg',
    },
    {
      id: 8,
      hero_id: 14,
      title: 'Ultimate Spider-Man',
      year: 2021,
      image: '../../../assets/img/series/spider2012.jpg',
    },
    {
      id: 9,
      hero_id: 14,
      title: 'Spider-Man and His Amazing Friends',
      year: 1981,
      image: '../../../assets/img/series/spider1981.jpg',
    },

  ];
}
