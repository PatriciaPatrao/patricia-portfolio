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
        'Developing digital solutions for R&D and innovation projects, working across frontend applications, backend APIs, data integration and database-driven features. Collaborating with stakeholders to understand requirements, analyse data and deliver software solutions.',
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
