import { Component } from '@angular/core';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
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
      role: 'Microbiology Analyst / Team Leader',
      period: 'Previous experience',
      location: 'Portugal',
      description:
        'Worked in a regulated pharmaceutical environment, combining technical laboratory work with team coordination, data management and quality-focused processes. Developed experience in GMP/GLP environments, audits, data integrity and stakeholder communication.',
      technologies: [
        'GMP / GLP',
        'Data Integrity',
        'Data Management',
        'Data Analysis',
        'Data Visualization',
        'Data Reporting',
        'Data Governance',
        'Data Compliance',
        'Quality',
        'Team Leadership',
        'EDA',
        'Excel'
      ]
    }
  ];
}