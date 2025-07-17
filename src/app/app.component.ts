import { Component } from '@angular/core';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from "./components/projects/projects.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutMeComponent, ToolbarComponent, SkillsComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';
}
