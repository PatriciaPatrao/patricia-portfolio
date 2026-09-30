import { Component } from '@angular/core';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      company: 'ISQ',
      role: 'Software Developer — R&D / Innovation',
      period: 'Nov 2023 — Present',
      location: 'Lisbon, Portugal',
      description:
        'Developing and maintaining web applications for research, development and innovation projects, across frontend interfaces, REST APIs, authentication, data integration and database-driven features.',
      highlights: [
        'Develop and maintain software solutions in the Research, Development and Innovation department, working across frontend development, API integration and backend support.',
        'Build responsive, reusable interfaces with Angular, TypeScript, RxJS and NgRx, with attention to component architecture and user-oriented screens.',
        'Design, develop and integrate REST APIs with Python, Flask and FastAPI, connecting frontend applications to backend services and data sources.',
        'Work with SQL and NoSQL databases, including PostgreSQL, MySQL and MongoDB, to support data-intensive applications and backend functionality.',
        'Implement authentication and authorisation with OAuth2, and contribute to asynchronous workflows that connect the frontend, the backend and external services.',
        'Apply Clean Code and Clean Architecture in delivery work, including unit testing with Pytest, refactoring and incremental modernisation of existing applications.',
        'Use Git, Docker, Docker Compose and CI/CD in development workflows, and work with cloud environments on AWS and Google Cloud.',
        'Contribute to AI and generative AI initiatives with OpenAI APIs and Hugging Face across R&D projects.',
        'Use Figma to refine layouts, responsive behaviour and user flows, collaborating on the technical and experience sides of the software.',
      ],
      technologies: [
        'Angular',
        'REST APIs',
        'TypeScript',
        'Python',
        'SQL',
        'SQL and NoSQL Databases',
        'Docker',
        'Docker Compose',
        'Doppler',
        'CircleCI',
        'Git',
        'CI/CD',
        'Agile',
        'Figma',
        'Slack',
      ]
    },
    {
      company: 'Recipharm',
      role: 'Team Leader',
      period: 'Feb 2020 — Oct 2023',
      location: 'Portugal',
      description:
        'Led laboratory and quality-related teams in a regulated pharmaceutical environment, coordinating complex activities across stakeholders, clients and validation work while using operational and analytical data to support quality management and continuous improvement.',
      highlights: [
        'Led cross-functional teams and coordinated complex activities across laboratory and quality-related processes.',
        'Worked directly with clients to support product validation activities, requirements clarification and the delivery of validation-related work.',
        'Organised and conducted internal audits, requiring detailed knowledge of the data generated for each client, its traceability, quality requirements and associated processes.',
        'Reviewed and interpreted operational and analytical data to identify inconsistencies, risks, deviations and opportunities for improvement.',
        'Used a structured, data-driven approach to problem-solving, process optimisation and quality management.',
        'Coordinated activities across multiple stakeholders, strengthening stakeholder management, communication and collaborative problem-solving skills.',
        'Supported continuous improvement initiatives using evidence from operational and analytical data.',
      ],
      technologies: [
        'Stakeholder Management',
        'Client Communication',
        'Validation',
        'Audits',
        'Data Review',
        'Process Optimisation',
        'Quality Management',
      ]
    },
    {
      company: 'Recipharm',
      role: 'Microbiology Analyst',
      period: 'Nov 2017 — Feb 2020',
      location: 'Portugal',
      description:
        'Performed pharmaceutical laboratory analyses in a highly regulated environment, managing and reviewing laboratory data with close attention to data quality, integrity, traceability and accurate interpretation of results.',
      highlights: [
        'Performed analyses of pharmaceutical products, raw materials and materials according to applicable laboratory procedures and quality requirements.',
        'Managed, analysed and reviewed laboratory data, with particular attention to data quality, traceability and integrity.',
        'Applied ALCOA principles to ensure data integrity, accuracy, completeness, consistency and traceability of reported results.',
        'Analysed and processed environmental monitoring data from manufacturing environments, identifying relevant patterns, deviations and data quality issues.',
        'Prepared and reviewed analytical results and associated documentation for reporting and quality processes.',
        'Worked in a highly regulated environment where accurate data interpretation, documentation and compliance were critical.',
      ],
      technologies: [
        'Data Analysis',
        'Data Quality',
        'Data Integrity',
        'Data Traceability',
        'ALCOA',
        'Quality',
      ]
    }
  ];
}
