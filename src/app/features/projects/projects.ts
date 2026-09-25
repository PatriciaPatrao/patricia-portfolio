import { Component } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ProjectItem {
  name: string;
  slug: string;
  category: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})

export class Projects {
  projects: ProjectItem[] = [
    {
      name: 'GreenWatch',
      slug: 'greenwatch',
      category: 'Professional Project',
      description:
        'Web platform for monitoring land and forest-related data, integrating interactive maps, data visualisation and REST APIs.',
      technologies: [
        'Angular 19',
        'TypeScript',
        'RxJS',
        'Leaflet',
        'Chart.js',
        'Directus REST API'
      ]
    },
    {
      name: 'Newspace-Riscos',  
      slug: 'newspace-riscos',
      category: 'Professional Project',
      description:
        'Web platform combining geospatial data, backend services and database integration to support risk-related information and analysis.',
      technologies: [
        'Angular 19',
        'PrimeNG',
        'Leaflet',
        'Flask',
        'RabbitMQ',
        'PostgreSQL',
        'AWS Cognito'
      ]
    },
    {
      name: 'Forms Platform',
      slug: 'forms-platform',
      category: 'Professional Project',
      description:
        'Angular-based platform for managing and working with digital forms, including frontend development, application configuration and dependency management.',
      technologies: [
        'Angular 17',
        'TypeScript',
        'SCSS',
        'Reactive Forms',
        'Node.js',
        'npm'
      ]
    },
    {
      name: 'MetaFacturing',
      slug: 'metafacturing',
      category: 'Professional Project',
      description:
        'Digital solution developed within an R&D environment, combining software development and data-driven functionality.',
      technologies: [
        'Angular',
        'TypeScript',
        'Python',
        'REST APIs',
        'SQL'
      ]
    }
  ];
}