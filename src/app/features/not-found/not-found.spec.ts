import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import {
  NOT_FOUND_PAGE_DESCRIPTION,
  NOT_FOUND_PAGE_TITLE,
} from '../../core/seo/page-meta.service';
import { NotFound } from './not-found';

describe('NotFound', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFound],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the not-found copy and navigation actions', async () => {
    const fixture = TestBed.createComponent(NotFound);
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('h1')?.textContent).toContain('Page not found');
    expect(root.textContent).toContain(
      'The page you requested could not be found.'
    );

    const homepageLink = Array.from(root.querySelectorAll('a')).find((link) =>
      link.textContent?.includes('BACK TO HOMEPAGE')
    ) as HTMLAnchorElement;
    const projectsLink = Array.from(root.querySelectorAll('a')).find((link) =>
      link.textContent?.includes('VIEW PROJECTS')
    ) as HTMLAnchorElement;

    expect(homepageLink.getAttribute('href')).toBe('/');
    expect(projectsLink.getAttribute('href')).toBe('/#projects');
  });

  it('should apply not-found metadata', async () => {
    const fixture = TestBed.createComponent(NotFound);
    await fixture.whenStable();

    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);

    expect(title.getTitle()).toBe(NOT_FOUND_PAGE_TITLE);
    expect(meta.getTag('name="description"')?.content).toBe(
      NOT_FOUND_PAGE_DESCRIPTION
    );
    expect(meta.getTag('property="og:title"')?.content).toBe(
      NOT_FOUND_PAGE_TITLE
    );
  });
});
