import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PageMetaService } from '../../core/seo/page-meta.service';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, Footer],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound implements OnInit {
  private readonly pageMeta = inject(PageMetaService);

  ngOnInit(): void {
    this.pageMeta.setNotFound();
  }
}
