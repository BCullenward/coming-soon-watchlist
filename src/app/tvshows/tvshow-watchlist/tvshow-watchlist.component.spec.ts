import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowWatchlistComponent } from './tvshow-watchlist.component';

describe('TvshowWatchlistComponent', () => {
  let component: TvshowWatchlistComponent;
  let fixture: ComponentFixture<TvshowWatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowWatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
