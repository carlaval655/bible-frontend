import { TestBed } from '@angular/core/testing';

import { BibleService } from './bible.service';

describe('ConsultaService', () => {
  let service: BibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
