import { Component } from '@angular/core';

import { Home } from '../home/home';
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-portfolio',
  imports: [Home, About, Experience, Projects],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})

export class Portfolio {}
