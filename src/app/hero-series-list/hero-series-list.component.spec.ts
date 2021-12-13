import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSeriesListComponent } from './hero-series-list.component';

describe('HeroSeriesListComponent', () => {
  let component: HeroSeriesListComponent;
  let fixture: ComponentFixture<HeroSeriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSeriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
