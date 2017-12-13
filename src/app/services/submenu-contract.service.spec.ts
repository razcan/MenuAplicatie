import { TestBed, inject } from '@angular/core/testing';

import { SubmenuContractService } from './submenu-contract.service';

describe('SubmenuContractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmenuContractService]
    });
  });

  it('should be created', inject([SubmenuContractService], (service: SubmenuContractService) => {
    expect(service).toBeTruthy();
  }));
});
