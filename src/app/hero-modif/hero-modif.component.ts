import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-hero-modif',
  templateUrl: './hero-modif.component.html',
  styleUrls: ['./hero-modif.component.less']
})
export class HeroModifComponent implements OnInit {

  hero: any;
  change:boolean = false;
  

  constructor(private Hero:HeroService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    // this.Hero.get(id).subscribe((value: any) => {
    //   console.log(value)
    //   this.hero = value;
    // });
  }

  modif() {
    this.Hero.update(this.hero).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}
