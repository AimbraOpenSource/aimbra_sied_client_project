import { TestBed } from '@angular/core/testing';

import { ZuserService } from './zuser.service';

describe('ZuserService', () => {
  let service: ZuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
