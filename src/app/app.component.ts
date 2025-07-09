import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Toolbar, ButtonModule, InputTextModule, CardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';
  isDarkMode = false;

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element !== null) {
      this.isDarkMode = !this.isDarkMode;
      element.classList.toggle('my-app-dark');
    }
  }
}
