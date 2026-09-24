import { Component } from '@angular/core';

import { Home } from '../home/home';
import { About } from '../about/about';
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-portfolio',
  imports: [Home, About, Experience],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})

export class Portfolio {}
