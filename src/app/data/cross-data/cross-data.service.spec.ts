import { TestBed } from '@angular/core/testing';

import { CrossDataService } from './cross-data.service';

describe('CrossDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrossDataService = TestBed.get(CrossDataService);
    expect(service).toBeTruthy();
  });
});
