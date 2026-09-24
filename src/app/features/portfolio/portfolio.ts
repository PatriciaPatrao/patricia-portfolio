import { Component } from '@angular/core';

import { Home } from '../home/home';
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-portfolio',
  imports: [Home, About, Experience, Projects, Skills],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})

export class Portfolio {}
