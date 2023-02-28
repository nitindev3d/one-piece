import { Component, OnInit } from '@angular/core';
import { Pirate } from '../pirate';
import { PIRATES } from '../mock-pirates';
import { PirateService } from '../pirate.service';

@Component({
  selector: 'app-straw-hat',
  templateUrl: './straw-hat.component.html',
  styleUrls: ['./straw-hat.component.css']
})
export class StrawHatComponent implements OnInit{
  captain: string = 'Monkey D. Luffy'
  pirates: Pirate[] = []
  
  selectedPirate?: Pirate

  constructor(private pirateService: PirateService) {}

  getPirates() : void {
    this.pirates = this.pirateService.getPirates()
  }

  onSelect(pirate:Pirate): void
  {
    this.selectedPirate = pirate
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getPirates()
  }
}
