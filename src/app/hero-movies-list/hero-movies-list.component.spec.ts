import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMoviesListComponent } from './hero-movies-list.component';

describe('HeroMoviesListComponent', () => {
  let component: HeroMoviesListComponent;
  let fixture: ComponentFixture<HeroMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroMoviesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
