import { TestBed, inject } from '@angular/core/testing';

import { ToysService } from './toys.service';

describe('ToysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToysService]
    });
  });

  it('should be created', inject([ToysService], (service: ToysService) => {
    expect(service).toBeTruthy();
  }));
});
