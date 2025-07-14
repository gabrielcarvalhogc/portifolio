import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { AboutMeComponent } from './components/about-me/about-me.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Toolbar, ButtonModule, MenuModule, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';
  isDarkMode = false;

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        // command: () => this.navigateTo('/inicio') // Exemplo de navegação
      },
      {
        label: 'Sobre',
        icon: 'pi pi-info-circle',
      },
      {
        label: 'Projetos',
        icon: 'pi pi-briefcase',
      },
      {
        label: 'Contato',
        icon: 'pi pi-envelope',
      },
      {
        label: 'Tema',
        icon: this.isDarkMode ? 'pi pi-sun' : 'pi pi-moon',
        command: () => this.toggleDarkMode()
      }
    ]
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element !== null) {
      this.isDarkMode = !this.isDarkMode;
      element.classList.toggle('my-app-dark');
    }
  }
}
