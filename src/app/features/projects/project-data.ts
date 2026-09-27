export interface ProjectItem {
    name: string;
    slug: string;
    category: string;
    shortDescription: string;
    description: string;
    technologies: string[];
    role: string;
    contributions: string[];
}

export const PROJECTS: ProjectItem[] = [
    {
      name: 'GreenWatch',
      slug: 'greenwatch',
      category: 'Professional Project',
      shortDescription:
        'Web platform for monitoring land and forest-related data, integrating interactive maps, data visualisation and REST APIs.',
      description:
        'A web platform developed within an R&D environment to support the visualisation and analysis of land and forest-related information.',
      role: 'Software Developer',
      contributions: [
        'Frontend development with Angular',
        'Integration with REST APIs',
        'Interactive data visualisation',
        'Reactive data flows with RxJS'
      ],
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
      shortDescription:
        'Web platform combining geospatial data, backend services and database integration to support risk-related information and analysis.',
      description:
        'A digital platform developed within an R&D context, combining geospatial information, frontend applications and backend services.',
      role: 'Software Developer',
      contributions: [
        'Frontend development with Angular',
        'Integration with backend services',
        'Geospatial data visualisation',
        'Database integration'
      ],
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
      slug: 'forms',
      category: 'Professional Project',
      shortDescription:
        'Angular-based platform for managing and working with digital forms.',
      description:
        'An Angular-based platform developed to support digital form workflows and frontend application functionality.',
      role: 'Software Developer',
      contributions: [
        'Frontend development with Angular',
        'Reactive Forms implementation',
        'Application configuration',
        'Dependency management'
      ],
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
      shortDescription:
        'Digital solution developed within an R&D environment, combining software development and data-driven functionality.',
      description:
        'A digital solution developed in an R&D environment, combining software development with data-driven functionality.',
      role: 'Software Developer',
      contributions: [
        'Software development',
        'Frontend development',
        'API integration',
        'Data-driven functionality'
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Python',
        'REST APIs',
        'SQL'
      ]
    }
];