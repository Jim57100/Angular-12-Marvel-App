import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor() { }

  comics = [
    {
      id: 1,
      hero_id: 14,
      title: 'The Amazing Spider-Man #75',
      date: 'October 06, 2021',
      authors: 'Wells, Fiorelli',
      image: '../../../assets/img/comics/75.jpg',

    },
    {
      id: 2,
      hero_id: 10,
      title: 'Captain Marvel #33',
      date: 'October 06, 2021',
      authors: 'Thompson, Davila',
      image: '../../../assets/img/comics/33.jpg',
    },
    {
      id: 3,
      hero_id: [9, 2, 1],
      title: 'Original Sin #1',
      date: 'May 07, 2014',
      authors: 'Aaron, Tedesco',
      image: '../../../assets/img/comics/1.jpg',
    },
    {
      id: 4,
      hero_id: [3, 5, 1, 2, 9, 12, 15],
      title: 'Age of Ultron #1',
      date: 'March 06, 2013',
      authors: 'Bendis, Hitch',
      image: '../../../assets/img/comics/1u.jpg',
    },
    {
      id: 5,
      hero_id: 12,
      title: 'Hawkeye: Kate Bishop (2021) #3',
      date: 'January 12, 2022',
      authors: 'Nijkamp, Balam, Lindsay',
      image: '../../../assets/img/comics/3h.jpg',
    },
    {
      id: 6,
      hero_id: 13,
      title: 'Guardians of the Galaxy (2020) #1',
      date: 'January 22, 2020',
      authors: 'Ewing, Cabal',
      image: '../../../assets/img/comics/1g.jpg',
    },
    {
      id: 7,
      hero_id: 6,
      title: 'Avengers (2010) #24.1',
      date: 'March 28, 2012',
      authors: 'Bendis, Peterson, Oback',
      image: '../../../assets/img/comics/24.jpg',
    },
    {
      id: 8,
      hero_id: 9,
      title: 'Avengers (2010) #16',
      date: 'August 17, 2011',
      authors: 'Bendis, Romita, Davis',
      image: '../../../assets/img/comics/16.jpg',
    },
    {
      id: 9,
      hero_id: 6,
      title: 'Avengers (2010) #24',
      date: 'March 14, 2012',
      authors: 'Bendis',
      image: '../../../assets/img/comics/24s.jpg',
    },
    {
      id: 10,
      hero_id: 1,
      title: 'Black Widow (2020) #10',
      date: 'August 25, 2021',
      authors: 'Thompson, De Latorre, Casagrande, Hughes',
      image: '../../../assets/img/comics/10.jpg',
    },
    {
      id: 11,
      hero_id: 4,
      title: 'Black Panther Annual (2018) #1',
      date: 'February 21, 2018',
      authors: 'Mcgregor, Priest, Hudlin, Lashley, Perkins, Acuna',
      image: '../../../assets/img/comics/1p.jpg',
    },
    {
      id: 12,
      hero_id: 5,
      title: 'Immortal Hulk Vol. 6: We Believe In Bruce Banner',
      date: 'March 18, 2020',
      authors: 'Ewing, Bennett, Reiley, Bergara',
      image: '../../../assets/img/comics/6.jpg',
    },
    {
      id: 13,
      hero_id: 3,
      title: 'True Believers: Iron Man 2020 - War Machine (2020) #1',
      date: 'February 26, 2020',
      authors: 'Michelinie, Byrne, Layton',
      image: '../../../assets/img/comics/1i.jpg',
    },
  ]
}

