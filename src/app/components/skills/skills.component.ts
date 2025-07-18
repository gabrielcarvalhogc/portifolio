import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [DividerModule, AnimateOnScroll],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: { name: string; image: string }[] = [
    {
      name: 'Java',
      image: 'stack/logo-java.png'
    },
    {
      name: 'Angular',
      image: 'stack/logo-angular.png'
    },
    {
      name: 'Spring',
      image: 'stack/logo-spring.png'
    },
    {
      name: 'Spring Boot',
      image: 'stack/logo-spring-boot.png'
    },
    {
      name: 'TypeScript',
      image: 'stack/logo-typescript.png'
    },
    {
      name: 'MySQL',
      image: 'stack/logo-mysql.png'
    },
    {
      name: 'Postgres',
      image: 'stack/logo-postgres.png'
    },
    {
      name: 'HTML5',
      image: 'stack/logo-HTML5.png'
    },
    {
      name: 'Github',
      image: 'stack/logo-github.png'
    },
    {
      name: 'Git',
      image: 'stack/logo-git.png'
    },
    {
      name: 'Bootstrap',
      image: 'stack/logo-bootstrap.png'
    },
    {
      name: 'Jest',
      image: 'stack/logo-jest.png'
    },
  ]
}
