import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  heroes = [
    {
      id: 1,
      heroName: 'Black-Widow',
      realName: 'Natasha Romanoff',
      gender: 'female',
      placeOfOrigin: 'Stalingrad, Former U.S.S.R',
      powers: 'Slowed Aging, Superhuman Durability, close combat',
      affilitation: 'Avengers, S.H.I.E.L.D., Secret Avengers',
      characterImg: '../../../assets/img/characters/black-widow.png',
      thumbnails: '../../../assets/img/thumbnails/wid_thumb.png',
      description: 'Despite her origins as an agent of evil, Natasha Romanoff has become a force for good in the world of covert intelligence and super heroics. Like her namesake arachnid, Romanoff is stealthy, precise, and absolutely lethal. She is the Black Widow.',
      isFavorite: false,
    },
    {
      id: 2,
      heroName: 'Thor Odinson',
      realName: 'Thor Odinson',
      gender: 'male',
      placeOfOrigin: 'A cave in Norwaygard',
      powers: 'Odinpower"Warrior\'s Madness" (Berserker Rage)Superhuman StrengthSuperhuman DurabilitySuperhuman SpeedSuperhuman ReflexesControl of ElementsHand-to-Hand CombatSword-Fighting',
      affilitation: 'Avengers, Heralds of galactus',
      characterImg: 'https://i.kym-cdn.com/photos/images/original/001/964/578/fe7',
      thumbnails: '../../../assets/img/thumbnails/thor_thumb.png',
      description: 'Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.',
      isFavorite: false,
    },
    {
      id: 3,
      heroName: 'Iron Man',
      realName: 'Tony Stark',
      characterImg: '../../../assets/img/characters/Iron_Man.png',
      thumbnails: '../../../assets/img/thumbnails/iron_thumb.png',
      description: 'Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.',
      isFavorite: false,
    },
    {
      id: 4,
      heroName: 'Black Panther',
      realName: 'T’Challa',
      characterImg: '../../../assets/img/characters/black-panther.png',
      thumbnails: '../../../assets/img/thumbnails/panth_thumb.png',
      description: 'As the king of the African nation of Wakanda, T’Challa protects his people as the latest in a legacy line of Black Panther warriors.',
      isFavorite: false,
    },
    {
      id: 5,
      heroName: 'Hulk',
      realName: 'BRUCE BANNER',
      characterImg: '../../../assets/img/characters/hulk-marvel.png',
      thumbnails: '../../../assets/img/thumbnails/hulk-thumb.png',
      description: 'Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.',
      isFavorite: false,
    },
    {
      id: 6,
      heroName: 'Vision',
      realName: '',
      characterImg: '../../../assets/img/characters/vision.png',
      thumbnails: '../../../assets/img/thumbnails/vision_thumb.png',
      description: 'A fully unique being, Vision came about thanks to a combination of Wakandan Vibranium, Asgardian lightning, an Infinity Stone, and more.',
      isFavorite: false,
    },
    {
      id: 7,
      heroName: 'Thanos',
      realName: '',
      characterImg: '../../../assets/img/characters/thanos.png',
      thumbnails: '../../../assets/img/thumbnails/than_thumb.png',
      description: 'Using the power of the Infinity Stones, Thanos believes he can ultimately save the universe by wiping out half of its population.',
      isFavorite: false,
    },
    {
      id: 8,
      heroName: 'War-Machine',
      realName: 'Lt. Col. James “Rhodey” Rhodes',
      characterImg: '../../../assets/img/characters/war-machine.png',
      thumbnails: '../../../assets/img/thumbnails/James_Rhodes_thumb.png',
      description: 'Air Force Lieutenant Colonel James “Rhodey” Rhodes exudes loyalty and courage, whether flying a plane or piloting the War Machine armor.',
      isFavorite: false,
    },
    {
      id: 9,
      heroName: 'Captain America',
      realName: 'Steve Rogers',
      characterImg: '../../../assets/img/characters/captain-america.png',
      thumbnails: '../../../assets/img/thumbnails/capt_am_thumb.png',
      description: 'America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.',
      isFavorite: false,
    },
    {
      id: 10,
      heroName: 'Captain Marvel',
      realName: 'Carol Danvers',
      characterImg: '../../../assets/img/characters/captain-marvel.png',
      thumbnails: '../../../assets/img/thumbnails/capt_am_thumb.jpg',
      description: 'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
      isFavorite: false,
    },
    {
      id: 11,
      heroName: 'Dead Pool',
      realName: 'Wade Wilson',
      characterImg: '../../../assets/img/characters/deadpool.png',
      thumbnails: '../../../assets/img/thumbnails/deadp_thumb.png',
      description: 'Wade Wilson was born in Canada, but grew up to become the least Canadian person ever. When it comes to the Merc with a Mouth, with great power comes no responsibility.',
      isFavorite: false,
    },
    {
      id: 12,
      heroName: 'Hawkeye',
      realName: 'Clint Barton',
      characterImg: '../../../assets/img/characters/hawkeye.png',
      thumbnails: '../../../assets/img/thumbnails/',
      description: 'An expert marksman and fighter, Clint Barton puts his talents to good use by working for S.H.I.E.L.D. as a special agent. The archer known as Hawkeye also boasts a strong moral compass that at times leads him astray from his direct orders.',
      isFavorite: false,
    },
    {
      id: 13,
      heroName: 'Rocket',
      realName: '',
      characterImg: '../../../assets/img/characters/rocket.png',
      thumbnails: '../../../assets/img/thumbnails/rocket_thumb.png',
      description: 'Ain’t no thing like Rocket, ‘cept Rocket. He lives for the simple things, including collecting valuable bounty alongside his friend and partner, Groot. Quick to train a weapon on anyone who offends him, he’s far more formidable than he appears.',
      isFavorite: false,
    },
    {
      id: 14,
      heroName: 'Spiderman',
      realName: 'Peter Parker',
      characterImg: '../../../assets/img/characters/spiderman.png',
      thumbnails: '../../../assets/img/thumbnails/spider_thumb',
      description: 'With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man',
      isFavorite: false,
    },
    {
      id: 15,
      heroName: 'Scarlet Witch',
      realName: 'Wanda Maximoff',
      characterImg: '../../../assets/img/characters/wanda-maximoff.png',
      thumbnails: '../../../assets/img/thumbnails/scar_thumb.png',
      description: 'Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.',
      isFavorite: false,
    },
  ];

  switchFavorite(index :number) {
    this.heroes[index].isFavorite = !this.heroes[index].isFavorite;
  }

  getHeroById(id :number) {
    let tmp;
    for(const hero of this.heroes) {
      if(hero.id == id ) {
        tmp = hero;
      } 
    }
    return tmp;
  }
}
