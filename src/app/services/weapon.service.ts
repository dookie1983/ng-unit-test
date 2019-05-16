import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  get() {
    return ['axe', 'archer', 'shield'];
  }
  constructor() { }
}
