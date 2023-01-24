import { TestBed } from '@angular/core/testing';

import { Paper1Service } from './paper1.service';

describe('Paper1Service', () => {
  let service: Paper1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Paper1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
