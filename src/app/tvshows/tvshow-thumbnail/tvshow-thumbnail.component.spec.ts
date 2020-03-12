import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowThumbnailComponent } from './tvshow-thumbnail.component';

describe('TvshowThumbnailComponent', () => {
  let component: TvshowThumbnailComponent;
  let fixture: ComponentFixture<TvshowThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
