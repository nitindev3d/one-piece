import { Component, Input } from '@angular/core';
import { Pirate } from '../pirate';
@Component({
  selector: 'app-pirate-details',
  templateUrl: './pirate-details.component.html',
  styleUrls: ['./pirate-details.component.css']
})
export class PirateDetailsComponent {
@Input() pirate?: Pirate
}
