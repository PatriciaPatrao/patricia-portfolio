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
      'ISQ’s production climate-risk platform for defining an area of interest, running staged calculations, inspecting geospatial layers, and producing reports.',
    description:
      'Newspace is ISQ’s climate-risk platform inside the GA40 system. Authenticated users define an area of interest, run a staged climate-risk calculation, inspect the resulting geospatial layers, and produce report artefacts. Climate-risk analysis depends on linked calculations over the same area — hazard, exposure, potential impact, vulnerability, and final risk — and each step has to be shown on a map with a legend, colour scale, and a downloadable report. The same application serves clients, who submit studies, and administrators, who process those submissions, run the calculations, and publish the results.',
    role: 'Full-Stack Developer',
    contributions: [
      'Dynamic request forms driven by the calculation tree',
      'Map workflows for drawing, WMS layers, colour maps, legends, and area clipping',
      'Request-detail workflow across the hazard-to-risk calculation chain',
      'Status polling, grouped request lists, and client and administrator views',
      'Point studies, multi-polygon comparison, and shapefile areas',
      'API contract for palettes, calculation trees, request payloads, and follow-up jobs',
      'Reusable submission, classification, and report-selection logic, with unit tests'
    ],
    technologies: [
      'Angular 19',
      'TypeScript',
      'RxJS',
      'PrimeNG',
      'Leaflet',
      'Flask',
      'PostgreSQL'
    ],
    roleSummary:
      'I worked as a full-stack developer, with most of the delivery on the frontend, and I also built and maintained the API surface the application depends on. The computation pipelines, queue consumer, persistence models, PDF generator, and object-storage layout were developed with the rest of the team. My backend work was the API those screens call, and keeping that contract aligned as the interface evolved.',
    stack: [
      'Angular 19',
      'TypeScript',
      'RxJS',
      'PrimeNG',
      'Leaflet',
      'Turf.js',
      'AWS Amplify',
      'AWS Cognito',
      'Flask',
      'SQLAlchemy',
      'PostgreSQL',
      'RabbitMQ',
      'GeoServer',
      'MinIO',
      'Docker',
      'nginx',
      'CircleCI'
    ],
    contributionGroups: [
      {
        title: 'Request Forms',
        description:
          'Built dynamic request forms driven by the calculation tree, including period, model, scenario, and difference-between-dates selection.'
      },
      {
        title: 'Map Experience',
        description:
          'Implemented area drawing, point mode, WMS layers, colour maps, legends, opacity, and clipping to the area of interest.'
      },
      {
        title: 'Calculation Workflow',
        description:
          'Developed the request-detail workflow for the full calculation chain, including eligibility rules, pending states, and optimistic updates while a job is running.'
      },
      {
        title: 'Status and Access',
        description:
          'Implemented status polling, grouped request lists, administrator and client views, and the failed-request flow.'
      },
      {
        title: 'Point Studies',
        description:
          'Added point studies with surrounding-area and building-only modes.'
      },
      {
        title: 'Comparison',
        description:
          'Implemented multi-polygon visualisation and comparison between analyses.'
      },
      {
        title: 'API Contract',
        description:
          'Built and maintained the palette-colour and calculation-tree responses, aligned request payloads and follow-up jobs, and updated endpoint documentation and request tests when the contract changed.'
      },
      {
        title: 'Structure and Tests',
        description:
          'Extracted reusable calculation submission, layer classification, and report-image selection rules, and added targeted unit tests.'
      }
    ],
    implementation: [
      'A user draws a polygon, places a point, or uploads a shapefile. The Angular application sends that study to the Flask API, which stores a computation request and queues it. A worker publishes raster layers to GeoServer. The interface polls request status, displays Web Map Service (WMS) layers, and lets the operator start the next calculation only when the required layers exist. Selected map views are stored and used to build PDF reports.',
      'The browser sends a Cognito JWT to the Flask API. Requests and layers are stored in PostgreSQL. Long calculations are queued in RabbitMQ and executed by the computation worker, which publishes results to GeoServer. Leaflet loads those layers through WMS. Map snapshots and PDFs are stored in MinIO and retrieved through the API. Earth-observation and climate-model data feed that chain, and the interface presents them as interactive risk maps for extreme temperature and intense precipitation.',
      'Administrators and clients share the same application. Cognito group membership and API ownership checks decide which requests, actions, and published files each user can see. Newspace is a separate Angular application on the existing GA40 API, so the climate-risk workflow stays independent of the other GA40 products.',
      'Heavy raster work runs asynchronously: the API records status, and the interface reacts to it. Calculation parameters stay in JSON and are validated against the tree, so new climate stages can be added without a new relational schema for every stage. Colour maps are generated in the client, so a layer can be restyled during analysis. Follow-up calculations reuse the completed layer and its study area, which keeps each stage tied to the correct request.',
      'The API and asynchronous computation path came first. The Angular application then added authentication, request creation, and map display. Forms moved from fixed options to the live calculation tree, and the detail screen grew from a single layer view into the hazard-to-risk workflow, with separate client and administrator paths. Later work added report images and PDFs, point-study modes, shapefile areas, and multi-polygon comparison.'
    ],
    workflows: [
      {
        title: 'Area of interest',
        description:
          'Users define a study area by drawing a polygon, placing a point, or uploading a shapefile.'
      },
      {
        title: 'Staged calculation',
        description:
          'The interface walks through hazard, exposure, potential impact, vulnerability, and final risk, starting the next step only when the required layers exist.'
      },
      {
        title: 'Interactive risk maps',
        description:
          'Operators inspect styled WMS layers with legends, colour scales, opacity, and clipping to the area of interest.'
      },
      {
        title: 'Client and administrator paths',
        description:
          'Clients submit studies. Administrators process those submissions, run the calculations, and publish the results in the same application.'
      },
      {
        title: 'Point studies',
        description:
          'Point analyses support surrounding-area and building-only modes.'
      },
      {
        title: 'Comparison',
        description:
          'Multiple polygons can be visualised and compared across analyses.'
      },
      {
        title: 'Reporting',
        description:
          'Selected map views are stored and used to build published PDF reports.'
      }
    ],
    challenge: {
      problem:
        'Each climate-risk stage depends on the previous one, can take a long time, and still has to be understandable on a map for both clients and administrators. Analysis options could not stay hardcoded, broad status polling did not scale, and layer styling had to change without republishing the dataset. The request-detail screen also accumulated too much behaviour as the workflow grew.',
      response: [
        'Long calculations were isolated in a subprocess with a timeout. The interface tracks pending, failed, and reprocessed jobs.',
        'The form and the detail view read dates, models, scenarios, and colours from the calculation-tree API instead of fixed options.',
        'Status updates moved from the full request list to the individual request endpoint.',
        'The client builds Styled Layer Descriptor (SLD) colour maps and applies them to WMS requests, so a layer can be restyled without republishing the dataset.',
        'Submission, layer classification, and report-image selection were extracted into reusable services and utilities, with targeted unit tests.',
        'As images, PDFs, and shapefiles were added, the API stayed aligned with one storage layout for those files. The storage layout itself was developed with the team.'
      ]
    }
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
