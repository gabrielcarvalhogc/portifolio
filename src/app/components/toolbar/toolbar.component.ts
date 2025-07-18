import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [Toolbar, ButtonModule, MenuModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  isDarkMode = false;

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        url: '#inicio'
      },
      {
        label: 'Skills',
        icon: 'pi pi-info-circle',
        url: '#skills'
      },
      {
        label: 'Projetos',
        icon: 'pi pi-briefcase',
        url: '#projetos'
      },
      {
        label: 'Contato',
        icon: 'pi pi-envelope',
        url: '#contato'
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
