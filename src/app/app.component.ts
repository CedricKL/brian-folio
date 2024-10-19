import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeSectionComponent } from "./home-section/home-section.component";
import { AboutSectionComponent } from "./about-section/about-section.component";
import { ExperienceSectionComponent } from "./experience-section/experience-section.component";
import { ProjectSectionComponent } from "./project-section/project-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HomeSectionComponent, AboutSectionComponent, ExperienceSectionComponent, ProjectSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
