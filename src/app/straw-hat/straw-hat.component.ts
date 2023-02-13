import { Component } from '@angular/core';
import { Pirate } from '../pirate';
import { PIRATES } from '../mock-pirates';
@Component({
  selector: 'app-straw-hat',
  templateUrl: './straw-hat.component.html',
  styleUrls: ['./straw-hat.component.css']
})
export class StrawHatComponent {
  captain: string = 'Monkey D. Luffy'
  pirates = PIRATES
  
  selectedPirate?: Pirate

  onSelect(pirate:Pirate): void
  {
    this.selectedPirate = pirate
  }

}
