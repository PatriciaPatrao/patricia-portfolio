export interface ProjectContributionGroup {
  title: string;
  description: string;
}

export interface ProjectWorkflow {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  problem: string;
  response: string[];
}

export interface ProjectItem {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  role: string;
  contributions: string[];
  roleSummary?: string;
  stack?: string[];
  contributionGroups?: ProjectContributionGroup[];
  implementation?: string[];
  workflows?: ProjectWorkflow[];
  challenge?: ProjectChallenge;
}

export const PROJECTS: ProjectItem[] = [
  {
    name: 'GreenWatch',
    slug: 'greenwatch',
    category: 'Professional Project',
    shortDescription:
      'A production web application for monitoring and analysing land and forest areas, combining geospatial information with environmental metrics and portfolio insights.',
    description:
      'GreenWatch is a production web application for monitoring and analysing land and forest areas. It brings together geospatial data, biomass and carbon-related metrics, processing status, verification information and portfolio-level insights in a single interface. The platform supports both technical and non-technical users by presenting complex environmental and operational information in a clearer, more usable form.',
    role: 'Frontend Developer',
    contributions: [
      'Frontend development with Angular, reactive forms, RxJS and client-side data management',
      'Integration with RESTful APIs, including authentication, session management, route guards and error handling',
      'Interactive map-based workflows and spatial visualisation with Leaflet',
      'Portfolio analytics, historical comparisons and Chart.js visualisations',
      'PDF and CSV export functionality',
      'Client-side logic for confidence, verification and prioritisation information',
      'Unit testing with Jasmine and Karma',
      'Collaboration with backend engineers, product owners, designers and domain stakeholders'
    ],
    technologies: [
      'Angular 19',
      'TypeScript',
      'RxJS',
      'Angular Material',
      'Leaflet',
      'Chart.js',
      'Directus REST APIs'
    ],
    roleSummary:
      'As Frontend Developer, I built the Angular application and was responsible for translating complex technical and environmental data into an intuitive frontend experience. My work focused on the Angular application, client-side workflows and frontend integration with backend and API services, rather than ownership of the backend architecture.',
    stack: [
      'Angular 19',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Angular Material',
      'RxJS',
      'Leaflet',
      'Chart.js',
      'Directus REST APIs',
      'Jasmine',
      'Karma'
    ],
    contributionGroups: [
      {
        title: 'Frontend Development',
        description:
          'Developed responsive frontend features using Angular, reactive forms, RxJS and client-side data management.'
      },
      {
        title: 'API Integration',
        description:
          'Integrated RESTful APIs with authentication, session management, route guards and error handling.'
      },
      {
        title: 'Geospatial Features',
        description:
          'Implemented interactive map-based workflows and spatial data visualisation using Leaflet.'
      },
      {
        title: 'Analytics & Visualisation',
        description:
          'Developed portfolio analytics, historical comparisons and visual representations of environmental and operational data, including Chart.js where relevant.'
      },
      {
        title: 'Reporting',
        description:
          'Implemented PDF and CSV export functionality for reporting workflows.'
      },
      {
        title: 'Business Logic',
        description:
          'Developed client-side business logic for interpreting confidence, verification and prioritisation information.'
      },
      {
        title: 'Testing',
        description:
          'Applied unit testing with Jasmine and Karma to validate business rules and frontend functionality.'
      },
      {
        title: 'Collaboration',
        description:
          'Collaborated with backend engineers, product owners, designers and domain stakeholders to translate requirements into practical, user-focused solutions.'
      }
    ],
    implementation: [
      'The frontend was built as an Angular 19 application with TypeScript, using reactive forms and RxJS for form handling, asynchronous data flows and client-side state management.',
      'RESTful API integration included authentication and session handling, protected routes through route guards, and consistent error handling across frontend workflows. Directus REST APIs were used as part of the service layer consumed by the application.',
      'Geospatial visualisation and map-based interactions were implemented with Leaflet, supporting area-focused workflows and spatial presentation of land and forest information.',
      'Portfolio analytics and historical comparisons were supported through frontend visualisation components, including Chart.js where charts were required.',
      'Client-side logic interpreted confidence, verification and prioritisation information so users could work with complex environmental data more effectively. Unit tests with Jasmine and Karma were used to validate business rules and frontend behaviour.'
    ],
    workflows: [
      {
        title: 'Area registration',
        description:
          'Frontend flows for registering and managing land and forest areas within the application.'
      },
      {
        title: 'Interactive map-based workflows',
        description:
          'Leaflet-driven map interactions that support spatial exploration and area-focused tasks.'
      },
      {
        title: 'Spatial visualisation',
        description:
          'Presentation of geospatial and environmental information in a clearer visual form for day-to-day use.'
      },
      {
        title: 'Historical version comparison',
        description:
          'Interfaces that help users compare evaluations and related information over time.'
      },
      {
        title: 'Portfolio analytics',
        description:
          'Views that surface portfolio-level insights across monitored areas rather than only individual records.'
      },
      {
        title: 'Reporting and export',
        description:
          'PDF and CSV export functionality to support reporting needs from the frontend.'
      },
      {
        title: 'Confidence and verification interpretation',
        description:
          'Client-side presentation of confidence and verification information to support more informed review.'
      },
      {
        title: 'Prioritisation',
        description:
          'Frontend logic and presentation that help identify areas requiring attention.'
      }
    ],
    challenge: {
      problem:
        'A key challenge was bridging complex environmental and technical information with meaningful user decisions. Users with different levels of technical knowledge needed to compare evaluations, interpret verification and confidence information, and identify areas requiring attention without being overwhelmed by the underlying data.',
      response: [
        'The frontend evolved beyond a simple area-management interface into a portfolio and decision-support experience.',
        'Portfolio-level views and historical comparisons made it easier to assess information across time and across areas.',
        'Visual interpretation of environmental and operational data reduced the effort required to understand complex inputs.',
        'Verification, confidence and prioritisation information was surfaced through the frontend so users could focus on areas that needed attention.',
        'Interactive geospatial workflows supported more intuitive work with land and forest data.'
      ]
    }
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
