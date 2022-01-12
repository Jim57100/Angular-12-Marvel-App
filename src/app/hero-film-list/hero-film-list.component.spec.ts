import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFilmListComponent } from './hero-film-list.component';

describe('HeroFilmListComponent', () => {
  let component: HeroFilmListComponent;
  let fixture: ComponentFixture<HeroFilmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFilmListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
