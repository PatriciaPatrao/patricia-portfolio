import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ProjectItem, PROJECTS } from '../project-data';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss'
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);

  project: ProjectItem | undefined;

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.project = PROJECTS.find(
      (project) => project.slug === slug
    );
  }
}