import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryWrapperSectionComponent } from './gallery-wrapper-section.component';

describe('GalleryWrapperSectionComponent', () => {
  let component: GalleryWrapperSectionComponent;
  let fixture: ComponentFixture<GalleryWrapperSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryWrapperSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryWrapperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
