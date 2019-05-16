import { TestBed, inject } from '@angular/core/testing';

import { WeaponService } from './weapon.service';

describe('WeaponService', () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeaponService]
    });
  });

  beforeEach(inject([WeaponService], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return available weapn', () => {
    const weapons = service.get();
    expect(weapons).toContain('axe');
    expect(weapons).toContain('archer');
    expect(weapons).toContain('shield');
    expect(weapons.length).toEqual(3);
  });
});
