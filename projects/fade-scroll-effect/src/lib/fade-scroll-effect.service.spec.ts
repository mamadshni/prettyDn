import { TestBed } from '@angular/core/testing';

import { FadeScrollEffectService } from './fade-scroll-effect.service';

describe('FadeScrollEffectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FadeScrollEffectService = TestBed.get(FadeScrollEffectService);
    expect(service).toBeTruthy();
  });
});
