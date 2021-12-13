import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComicsListComponent } from './hero-comics-list.component';

describe('HeroComicsListComponent', () => {
  let component: HeroComicsListComponent;
  let fixture: ComponentFixture<HeroComicsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroComicsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
