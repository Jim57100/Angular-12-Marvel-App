import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.less']
})
export class HeroDetailsComponent implements OnInit {

  @Input() heroName :string = '';
  @Input() description :string = '';
  @Input() characterImg :string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
