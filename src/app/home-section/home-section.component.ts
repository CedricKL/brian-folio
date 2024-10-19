import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {
  introMsg = "Hello I'm";
  name = "Brian Biendou";
  position = "Embedded System engineer";
}
