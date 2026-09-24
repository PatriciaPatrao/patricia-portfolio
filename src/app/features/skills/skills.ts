import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})

export class Skills {
  skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      skills: [
        'Angular',
        'TypeScript',
        'HTML',
        'SCSS',
        'RxJS',
        'PrimeNG',
        'Angular Material',
        'Reactive Forms'
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        'Python',
        'Flask',
        'FastAPI',
        'REST APIs',
        'OpenAPI',
        'Authentication',
        'API Integration'
      ]
    },
    {
      title: 'Data & Databases',
      skills: [
        'SQL',
        'PL/SQL',
        'PostgreSQL',
        'MongoDB',
        'Data Analysis',
        'Data Visualisation'
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        'Git',
        'GitHub',
        'GitLab',
        'Docker',
        'Docker Compose',
        'CircleCI',
        'CI/CD',
        'AWS',
        'GCP'
      ]
    },
    {
      title: 'Practices',
      skills: [
        'Agile / Scrum',
        'Testing',
        'Pytest',
        'Jasmine / Karma',
        'Figma',
        'Stakeholder Collaboration'
      ]
    }
  ];
}