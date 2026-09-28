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
    name: 'Newspace-3D',
    slug: 'newspace-3d',
    category: 'Professional Project',
    shortDescription:
      'Part of ISQ’s Newspace platform, focused on interactive 3D visualisation of geospatial and climate-related data.',
    description:
      'Newspace-3D is part of ISQ’s Newspace platform inside the GA40 system, extending the geospatial workflows with interactive 3D visualisation so users can explore areas of interest and their related data in a more intuitive way.',
    role: 'Full-Stack Developer',
    contributions: [
      'Frontend development with Angular',
      'Interactive 3D visualisation of geospatial data',
      'Integration with the Newspace API',
      'Client-side data handling and user workflows'
    ],
    technologies: [
      'Angular 19',
      'TypeScript',
      'RxJS',
      'PrimeNG',
      'Flask'
    ]
  },

  {
    name: 'Forms Platform',
    slug: 'forms',
    category: 'Professional Project',
    shortDescription:
      'A production survey platform for designing structured questionnaires, distributing them to respondents, collecting answers, and reviewing results.',
    description:
      'Forms is a multi-user survey platform for designing structured questionnaires, distributing them, collecting answers, and reviewing results. A survey is the template: modules and questions, with optional repeated sections and calculated results. A survey answer is a distribution of that template, and a user answer survey is one respondent’s session. Questions support text, dropdown, rank, file, number, date, list, yes/no, and results calculated from other numeric answers. The Angular application is organised around three authenticated areas — authoring, answering, and results — with a public landing page and Cognito login outside that shell. Shared response links can be opened without the normal login route.',
    role: 'Full-Stack Developer',
    contributions: [
      'Authenticated shell with role-aware navigation for authoring, answering, and results',
      'Survey, module, and question authoring, including formulas, rank scales, and repeated sections',
      'Questionnaire preview and a navigable workflow map',
      'Respondent flow with a progress tree, next and previous questions, files, and submit',
      'Results screens with charts, rank averages, and CSV, PDF, and clipboard export',
      'Internationalisation across English and Portuguese, with a structure for further languages',
      'Targeted API changes required by those screens, including leaner survey payloads and rank aggregation'
    ],
    technologies: [
      'Angular 17',
      'TypeScript',
      'RxJS',
      'PrimeNG',
      'Chart.js',
      'AWS Cognito',
      'Flask'
    ],
    roleSummary:
      'I have been a primary contributor to the Angular application since the Forms front end was split out of an earlier template in September 2024. My work covers survey authoring, the respondent experience, results screens, internationalisation, and the HTTP services in front of the API. I am not the author of the platform backend. My API changes are a smaller set of fixes and extensions required by those screens. I did not own infrastructure, authentication design, document parsing, the carbon-equivalent calculation, or the AI reporting pipeline. Alongside implementation, I worked with stakeholders and product owners on requirements, edge cases, and how users should move through a survey.',
    stack: [
      'Angular 17',
      'TypeScript',
      'RxJS',
      'PrimeNG',
      'Chart.js',
      'jsPDF',
      'AWS Amplify',
      'AWS Cognito',
      'ngx-translate',
      'Flask',
      'PostgreSQL',
      'Redis',
      'MinIO',
      'Docker',
      'nginx',
      'CircleCI',
      'Karma',
      'Jasmine'
    ],
    contributionGroups: [
      {
        title: 'Application Shell',
        description:
          'Built the authenticated structure with lazy-loaded areas for surveys, answering, and results. A route guard sends unauthenticated users to login, while shared answering uses a separate route. The menu follows Cognito groups, and an HTTP interceptor carries the admin impersonation header. The impersonation rules themselves live in the API and were implemented by another contributor.'
      },
      {
        title: 'Survey Authoring',
        description:
          'Implemented list, create, edit, clone, send, and save-as-template flows. Titles are validated, descriptions are optional, and a simplified survey payload lets the list render without downloading every module and question. Module order is edited in the interface and persisted by the API.'
      },
      {
        title: 'Questions and Repeats',
        description:
          'Built the question editor for the supported types, including translated yes/no values, configurable rank scales, and result questions whose formula labels and numeric inputs come from the API. List questions can create repeated child modules, which is how a branching questionnaire is edited.'
      },
      {
        title: 'Preview and Workflow Map',
        description:
          'Added a read-only preview with a desktop and mobile viewport, and a pannable, zoomable map of modules, questions, and list-driven branches. Nodes that correspond to an editor route open that screen. Unit tests cover the graph and the workflow service.'
      },
      {
        title: 'Answering',
        description:
          'Implemented the respondent dashboard, the question tree, and next and previous navigation through the API rather than a hardcoded linear list. Saves include the parent keys for repeated sections, files can be uploaded and previewed, and answers can be copied between repeated instances. Answer loading was cached, and later extra per-question calls were removed once the API included answers in the tree.'
      },
      {
        title: 'Results and Export',
        description:
          'Built the author-facing results view: recipients, per-user replies, and per-question charts, including rank scales and averages. Browser export covers CSV, PDF, and copy as rich text or an HTML table. The report action calls the interpretation endpoint. Email composition, the PDF attachment, and the AI report text are backend behaviour implemented mainly by others.'
      },
      {
        title: 'Internationalisation',
        description:
          'Applied translations across authoring, answering, results, the landing page, and the top bar. English and Portuguese are the most complete. Spanish, French, and German have partial coverage. Labels are mapped back to the values the API stores before save.'
      },
      {
        title: 'API Changes',
        description:
          'Made focused server changes required by the screens: simplified survey JSON, consistent yes/no and multiple-choice handling, distinct rows for repeated sections, answers included in the tree, multilingual formula labels, rank averages for the charts, and cache invalidation when a survey is cloned. I did not implement SMTP, shared-response tokens, Redis, MinIO, the carbon calculator, or the AI interpretation stages.'
      }
    ],
    implementation: [
      'The browser is an Angular 17 application. Cognito, through AWS Amplify, provides the session. Requests go to a Flask API, which stores surveys, modules, questions, and answers in PostgreSQL, caches tree reads in Redis, and stores question images and uploaded files in MinIO. Invitation and report emails are sent by the server. The stack runs with Docker, nginx, and CircleCI. Secrets are loaded with Doppler, and the API is linted with Flake8.',
      'Authoring, answering, and results are separate feature areas. HTTP stays in services that share a response envelope, and components handle loading, validation, and messages. The next question is chosen by the API, so branching rules stay in one place. The client validates required titles, formula fields, and unanswered source modules. The API enforces its own constraints, including when a survey is closed because answers already exist.',
      'Where the history cannot show who designed a feature versus who connected a screen to an existing API, the screen is described as integration. Authentication design, email transport, storage, caching, Excel and DOCX parsing, carbon calculation, and AI interpretation were built mainly by other contributors. I connected those capabilities in the interface and, for formula labels and rank averages, extended the API so the screens could display them correctly.',
      'Front-end unit tests exist for selected behaviour, including the workflow map, preview, answering, and import. The CircleCI pipeline that runs on the API is Flake8 and a Docker build, not the Angular test suite, so those specs are present in the repository rather than a gate on every change.'
    ],
    workflows: [
      {
        title: 'Create a questionnaire',
        description:
          'An author signs in, creates a survey, and adds ordered or unordered modules and typed questions, including formulas, rank scales, and list questions that branch into repeated sections.'
      },
      {
        title: 'Preview the structure',
        description:
          'Preview and the workflow map read the same tree and show how the questionnaire fits together before anything is sent.'
      },
      {
        title: 'Send',
        description:
          'From the survey list, the author enters a title and recipients. The API creates one response record per recipient and emails a link. I built the send dialog and the recipient list. The message body and mail transport are server-side.'
      },
      {
        title: 'Answer',
        description:
          'The respondent opens the link, signs in or uses the shared route, and moves through the tree. Each save stores the answer, including files and repeated-section keys. Submit sets the end of the session on the server.'
      },
      {
        title: 'Review and export',
        description:
          'Authors see who was invited, who replied, and how each question was answered, including rank averages. Results can be copied, exported as CSV or PDF, or sent as a report.'
      },
      {
        title: 'Templates and import',
        description:
          'A survey can be saved as a reusable template. Import uploads a file and shows success or failure. The Excel and DOCX parsers, including document interpretation, are API modules I did not write.'
      }
    ],
    challenge: {
      problem:
        'A questionnaire is not a flat form. Modules can be ordered or unordered, list questions create repeated sections, and the next question depends on earlier answers. The survey list could not download the full tree just to render a row, the answering screen could not refetch every question while the tree updated, and results needed rank averages the existing analysis did not provide. Several platform features — email, file import, storage, and AI reports — already existed on the server and had to be used without treating them as work I designed.',
      response: [
        'The authoring UI distinguishes a normal dropdown from a list question that creates child modules, and the answering tree copies answers between repeated instances.',
        'Next and previous call the API’s next-question endpoint, so branching stays on the server. An earlier client-side attempt to force completion status was removed.',
        'A simplified survey payload returns list metadata without the child tree. Answers were later included in the tree response, and the extra per-question calls were removed.',
        'Rank aggregation and average scores were added on the analysis path the charts use, with tests for that behaviour. The reporting pipeline around it was built by others.',
        'Formula and question-type labels follow the active language in the interface and are mapped back to the stored values before save.',
        'Upload, template management, and the report action sit on top of import, storage, and interpretation endpoints. The parsers, object storage, and AI report text remain platform work I integrated with.'
      ]
    }
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
