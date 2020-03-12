import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicWatchlistComponent } from './music-watchlist.component';

describe('MusicWatchlistComponent', () => {
  let component: MusicWatchlistComponent;
  let fixture: ComponentFixture<MusicWatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicWatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
