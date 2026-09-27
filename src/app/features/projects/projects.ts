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
}