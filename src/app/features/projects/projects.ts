import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROJECTS } from './project-data';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})

export class Projects {
  projects = PROJECTS;

  cardIndex(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}