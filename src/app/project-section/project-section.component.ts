import { Component } from '@angular/core';
import { CardProjectComponent } from "./card-project/card-project.component";

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CardProjectComponent],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.css'
})
export class ProjectSectionComponent {

}
