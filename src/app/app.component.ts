import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Toolbar, ButtonModule, MenuModule, AboutMeComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';

}
