import { Component, Input } from '@angular/core';
import { Competence } from '../../objects/competence';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card-experience',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.css'
})
export class CardExperienceComponent {
  @Input() cardName: string = '';
  @Input() cardElements: Competence[] = [];
}
