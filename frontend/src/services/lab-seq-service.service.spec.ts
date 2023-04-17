import { TestBed } from '@angular/core/testing';

import { LabSeqService } from './lab-seq-service.service';

describe('LabSeqServiceService', () => {
  let service: LabSeqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabSeqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
