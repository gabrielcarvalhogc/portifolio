import { Project } from './model/projects';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Fight House',
      description: 'Um sistema de gerenciamento web voltado para a academia de artes lutas Fight House. Seu principal objetivo é fornecer um painel administrativo completo para os responsáveis pela academia, permitindo o controle eficiente.',
      link: [
        { icon: 'pi pi-github', url: 'https://github.com/gabrielcarvalhogc/academia-fight-house' },
        { icon: 'pi pi-link', url: 'https://www.academiafighthouse.com/' },
      ],
      imageUrl: '/projetos/fight-house.png',
    },
    {
      title: 'New Courses',
      description: 'Uma API REST completa para gerenciamento de Cursos, construída com Java, Spring Boot e Angular. Utilizando boas práticas de mercado, o foco é demonstrar um ciclo de desenvolvimento profissional, cobrindo desde a modelagem de entidades,persistência e camada de serviço, até testes automatizados e integração contínua.',
      link: [
        { icon: 'pi pi-github', url: 'https://github.com/gabrielcarvalhogc/new-courses-spring' },
        { icon: 'pi pi-github', url: 'https://github.com/gabrielcarvalhogc/new-courses-angular' },
      ],
      imageUrl: '/projetos/new-courses.png',
    },
    {
      title: 'Mercado Prático',
      description: 'Um sistema de gerenciamento web voltado para a academia de artes lutas Fight House. Seu principal objetivo é fornecer um painel administrativo completo para os responsáveis pela academia, permitindo o controle eficiente.',
      link: [
        { icon: 'pi pi-github', url: 'https://github.com/gabrielcarvalhogc/mercado-pratico' },
        { icon: 'pi pi-link', url: 'https://mercado-pratico.vercel.app/' },
      ],
      imageUrl: '/projetos/mercado-pratico.png',
    },
  ];
}
