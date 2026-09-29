import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export const DEFAULT_PAGE_TITLE =
  'Patrícia Patrão de Carvalho | Software Developer';

export const DEFAULT_PAGE_DESCRIPTION =
  'Software Developer focused on frontend, full stack, and data-driven applications.';

export const NOT_FOUND_PAGE_TITLE =
  'Page not found | Patrícia Patrão de Carvalho';

export const NOT_FOUND_PAGE_DESCRIPTION =
  'The page you requested could not be found. It may have been moved or the address may be incorrect.';

@Injectable({ providedIn: 'root' })
export class PageMetaService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  set(title: string, description: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  setDefault(): void {
    this.set(DEFAULT_PAGE_TITLE, DEFAULT_PAGE_DESCRIPTION);
  }

  setNotFound(): void {
    this.set(NOT_FOUND_PAGE_TITLE, NOT_FOUND_PAGE_DESCRIPTION);
  }
}
