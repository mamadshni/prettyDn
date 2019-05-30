import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeScrollEffectComponent } from './fade-scroll-effect.component';

describe('FadeScrollEffectComponent', () => {
  let component: FadeScrollEffectComponent;
  let fixture: ComponentFixture<FadeScrollEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeScrollEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeScrollEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
