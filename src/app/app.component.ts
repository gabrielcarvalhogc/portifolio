import { Component } from '@angular/core';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { SkillsComponent } from './components/skills/skills.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutMeComponent, ToolbarComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';
}
