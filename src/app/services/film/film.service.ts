import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  films = [
    {
      id: 1,
      hero_id: [3, 8],
      title: 'Iron Man',
      saga: 'The Infinity Saga (Phase 1)',
      country: 'USA',
      time: 126,
      realisator: 'Jon Favreau',
      scenario: ['Matt Holloway', 'Art Marcum', 'Mark Fergus', 'Hawk Ostby'],
      productor: ['Avi Arad', 'Kevin Feige'],
      realeaseDate: 2008,
      stars: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard ', 'Jeff Bridges']
    },
    {
      id: 2,
      hero_id: [3, 5],
      title: 'L\'incroyable Hulk',
      saga: 'The Infinity Saga (Phase 1)',
      country: 'USA',
      time: 112,
      realisator: 'Louis Leterrier',
      scenario: ['Zak Penn', 'Edward Norton', 'Louis Leterrier'],
      productor: ['Avi Arad', 'Gale Anne Hurd', 'Kevin Feige'] ,
      realeaseDate: 2008,
      stars: ['Edward Norton', 'Liv Tyler', 'Tim Roth', 'William Hurt']
    },
    {
      id: 3,
      hero_id: [14],
      title: 'Spider-Man: No Way Home',
      saga: 'The Multivers Saga (2nd cycle)',
      country: 'USA',
      time: 150,
      realisator: 'Jon Watts',
      scenario: ['Chris McKenna', 'Erik Sommers'],
      productor: ['Kevin Feige', 'Amy Pascal'],
      realeaseDate: 2021,
    },
    {
      id: 4,
      hero_id: [1],
      title: 'Black Widow',
      saga: 'The Multivers Saga (2nd cycle)',
      year: 2021,
      country: 'USA',
      time: 134,
      realisator: 'Cate Shortland',
      scenario: ['Eric Pearson', 'Ned Benson', 'Jac Schaeffer'],
      productor: ['Kevin Feige'],
      realeaseDate: 2021,
    },
    {
      id: 5,
      hero_id: [2],
      title: 'Thor : Le Monde des ténèbres',
      saga: 'The Infinity Saga (Phase 2)',
      year: 2013,
      country: 'USA',
      time: 123,
      realisator: 'Alan Taylor',
      scenario: ['Don Payne', 'Robert Rodat', 'Christopher Markus', 'Stephen McFeely'],
      productor: ['Kenneth Branagh', 'Kevin Feige'],
      realeaseDate: 2013,
    },
    {
      id: 6,
      hero_id: [13],
      title: 'Les Gardiens de la Galaxie',
      saga: 'The Infinity Saga (Phase 2)',
      year: 2014,
      country: 'USA',
      time: 122,
      realisator: 'James Gunn',
      scenario: ['James Gunn', 'Nicole Perlman'],
      productor: ['Kevin Feige'],
      realeaseDate: 2014,
    }
  ]
}
