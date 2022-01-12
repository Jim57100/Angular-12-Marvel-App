export class Hero 
{
  id? :string;
  heroName :string;
  realName :string;
  gender :string;
  powers :string;
  affiliation :string;
  characterImg :string;
  thumbnails :string;
  description :string;
  backgroundImg :string;
  isFavorite :boolean;

  constructor() {
    this.id = '';
    this.heroName = '';
    this.realName = '';
    this.gender = '';
    this.powers = '';
    this.affiliation = '';
    this.characterImg = '';
    this.thumbnails = '';
    this.description = '';
    this.backgroundImg = '';
    this.isFavorite = false;
  }
}
