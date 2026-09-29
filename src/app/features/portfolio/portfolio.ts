import { Component, inject, OnInit } from '@angular/core';

import { PageMetaService } from '../../core/seo/page-meta.service';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-portfolio',
  imports: [Home, About, Experience, Projects, Skills, Contact, Footer],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements OnInit {
  private readonly pageMeta = inject(PageMetaService);

  ngOnInit(): void {
    this.pageMeta.setDefault();
  }
}
