import { TestBed } from '@angular/core/testing';

import { PirateService } from './pirate.service';

describe('PirateService', () => {
  let service: PirateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PirateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
