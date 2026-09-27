import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ViewportScroller } from '@angular/common';
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
  private viewportScroller = inject(ViewportScroller);

  project: ProjectItem | undefined;
  previousProject: ProjectItem | undefined;
  nextProject: ProjectItem | undefined;
  displayTechnologies: string[] = [];

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.loadProject(params.get('slug'));
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  contributionIndex(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  private loadProject(slug: string | null): void {
    const index = PROJECTS.findIndex((project) => project.slug === slug);

    if (index === -1) {
      this.project = undefined;
      this.previousProject = undefined;
      this.nextProject = undefined;
      this.displayTechnologies = [];
      return;
    }

    this.project = PROJECTS[index];
    this.previousProject = PROJECTS[index - 1];
    this.nextProject = PROJECTS[index + 1];
    this.displayTechnologies =
      this.project.stack ?? this.project.technologies;
  }
}
