import { ViewportScroller } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import {
  NOT_FOUND_PAGE_DESCRIPTION,
  NOT_FOUND_PAGE_TITLE,
} from '../../../core/seo/page-meta.service';
import { routes } from '../../../app.routes';
import { PROJECTS } from '../project-data';

describe('ProjectDetail', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should resolve a valid slug and show the project information', async () => {
    const project = PROJECTS[0];
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(`/projects/${project.slug}`);

    const root = harness.routeNativeElement as HTMLElement;
    const text = root.textContent ?? '';

    expect(root.querySelector('h1')?.textContent).toContain(project.name);
    expect(text).toContain(project.shortDescription);
    expect(text).toContain(project.description);
    expect(text).toContain(project.role);
    expect(text).toContain('OVERVIEW');
    expect(text).toContain('TECHNOLOGIES');

    if (project.roleSummary) {
      expect(text).toContain(project.roleSummary);
    }

    if (project.contributionGroups?.length) {
      expect(text).toContain('KEY CONTRIBUTIONS');
      for (const group of project.contributionGroups) {
        expect(text).toContain(group.title);
      }
    }

    const displayTechnologies = project.stack ?? project.technologies;
    for (const technology of displayTechnologies) {
      expect(text).toContain(technology);
    }
  });

  it('should link back to the projects section', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(`/projects/${PROJECTS[0].slug}`);

    const backLink = harness.routeNativeElement?.querySelector(
      'a.back-link'
    ) as HTMLAnchorElement;

    expect(backLink.textContent).toContain('BACK TO PROJECTS');
    expect(backLink.getAttribute('href')).toBe('/#projects');
  });

  it('should expose next navigation for the first project', async () => {
    const first = PROJECTS[0];
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(`/projects/${first.slug}`);

    const root = harness.routeNativeElement as HTMLElement;
    expect(root.textContent).toContain('NEXT →');
    expect(root.textContent).toContain(PROJECTS[1].name);
    expect(root.textContent).not.toContain('← PREVIOUS');
  });

  it('should expose previous navigation for the last project', async () => {
    const last = PROJECTS[PROJECTS.length - 1];
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(`/projects/${last.slug}`);

    const root = harness.routeNativeElement as HTMLElement;
    expect(root.textContent).toContain('← PREVIOUS');
    expect(root.textContent).toContain(PROJECTS[PROJECTS.length - 2].name);
    expect(root.textContent).not.toContain('NEXT →');
  });

  it('should show the missing project state and not-found metadata for an invalid slug', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/projects/does-not-exist');

    const root = harness.routeNativeElement as HTMLElement;
    expect(root.querySelector('h1')?.textContent).toContain('Project not found');
    expect(root.textContent).toContain(
      'This project does not exist or is no longer available.'
    );

    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);
    expect(title.getTitle()).toBe(NOT_FOUND_PAGE_TITLE);
    expect(meta.getTag('name="description"')?.content).toBe(
      NOT_FOUND_PAGE_DESCRIPTION
    );
  });

  it('should update page metadata for a valid project', async () => {
    const project = PROJECTS[1];
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(`/projects/${project.slug}`);

    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);
    const expectedTitle = `${project.name} | Patrícia Patrão de Carvalho`;

    expect(title.getTitle()).toBe(expectedTitle);
    expect(meta.getTag('name="description"')?.content).toBe(
      project.shortDescription
    );
    expect(meta.getTag('property="og:title"')?.content).toBe(expectedTitle);
    expect(meta.getTag('property="og:description"')?.content).toBe(
      project.shortDescription
    );
  });

  it('should scroll to the top when a project detail loads', async () => {
    const viewportScroller = TestBed.inject(ViewportScroller);
    const scrollSpy = vi.spyOn(viewportScroller, 'scrollToPosition');

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(`/projects/${PROJECTS[0].slug}`);

    expect(scrollSpy).toHaveBeenCalledWith([0, 0]);
  });
});
