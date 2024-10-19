import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card-about',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './card-about.component.html',
  styleUrl: './card-about.component.css'
})
export class CardAboutComponent {
    @Input() icon: string = '';
    @Input() name: string = '';
    @Input() value: string = '';
    @Input() more: string = '';
}
