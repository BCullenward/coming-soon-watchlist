import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowHeaderComponent } from './tvshow-header.component';

describe('TvshowHeaderComponent', () => {
  let component: TvshowHeaderComponent;
  let fixture: ComponentFixture<TvshowHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
