import { Injectable } from '@angular/core';
import { PIRATES } from './mock-pirates';
import { Pirate } from './pirate';
@Injectable({
  providedIn: 'root'
})
export class PirateService {

  constructor() { }

  getPirates(): Pirate[] {
    return PIRATES
  }
}
