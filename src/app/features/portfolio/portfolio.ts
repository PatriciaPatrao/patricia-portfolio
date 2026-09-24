import { Component } from '@angular/core';
import { Home } from '../home/home';
import { About } from '../about/about';

@Component({
  selector: 'app-portfolio',
  imports: [Home, About],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {}
