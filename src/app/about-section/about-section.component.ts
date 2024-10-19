import { Component } from '@angular/core';
import { CardAboutComponent } from "./card-about/card-about.component";

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CardAboutComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {

}
