import { Component } from '@angular/core';
import { CardExperienceComponent } from "./card-experience/card-experience.component";

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CardExperienceComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css'
})
export class ExperienceSectionComponent {
  frontendCompetences = [
    {
      name : 'HTML',
      level : 'Experienced'
    },
    {
      name : 'CSS',
      level : 'Experienced'
    },
    {
      name : 'SASS',
      level : 'Intermediate'
    },
    {
      name : 'Javascript',
      level : 'Basic'
    },
    {
      name : 'Typescript',
      level : 'Basic'
    },
    {
      name : 'Material UI',
      level : 'Intermediate'
    },
  ];
  backendCompetences = [
    {
      name : 'PostgreSQL',
      level : 'Basic'
    },
    {
      name : 'Node JS',
      level : 'Intermediate'
    },
    {
      name : 'Express JS',
      level : 'Intermediate'
    },
    {
      name : 'Git',
      level : 'Intermediate'
    },
  ];
}
