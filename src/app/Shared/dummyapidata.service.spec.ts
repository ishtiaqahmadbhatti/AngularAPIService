import { TestBed } from '@angular/core/testing';

import { DummyapidataService } from './dummyapidata.service';

describe('DummyapidataService', () => {
  let service: DummyapidataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyapidataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
