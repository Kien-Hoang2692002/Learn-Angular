import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../shared/types/housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  template: `
  <p>housing - location works!</p>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
