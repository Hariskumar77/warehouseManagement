import { TestBed } from '@angular/core/testing';

import { RequestaccessServiceService } from './requestaccess-service.service';

describe('RequestaccessServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestaccessServiceService = TestBed.get(RequestaccessServiceService);
    expect(service).toBeTruthy();
  });
});
