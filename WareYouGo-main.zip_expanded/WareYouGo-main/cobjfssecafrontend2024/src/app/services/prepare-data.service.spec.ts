import { TestBed } from '@angular/core/testing';

import { PrepareDataService } from './prepare-data.service';

describe('PrepareDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrepareDataService = TestBed.get(PrepareDataService);
    expect(service).toBeTruthy();
  });
});
