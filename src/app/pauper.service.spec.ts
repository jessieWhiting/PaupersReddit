import { TestBed } from '@angular/core/testing';

import { PauperService } from './pauper.service';

describe('PauperService', () => {
  let service: PauperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PauperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
