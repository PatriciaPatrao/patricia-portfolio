import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { PROJECTS } from './project-data';
import { Projects } from './projects';
import { routes } from '../../app.routes';

describe('Projects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should render one card per project with the expected information', async () => {
    const fixture = TestBed.createComponent(Projects);
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;
    const cards = Array.from(
      root.querySelectorAll('a.project-card')
    ) as HTMLAnchorElement[];

    expect(cards).toHaveLength(PROJECTS.length);

    PROJECTS.forEach((project, index) => {
      const card = cards[index];
      const text = card.textContent ?? '';

      expect(text).toContain(project.name);
      expect(text).toContain(project.category);
      expect(text).toContain(project.role);
      expect(text).toContain(project.shortDescription);
      expect(text).toContain(String(index + 1).padStart(2, '0'));
      expect(card.getAttribute('href')).toBe(`/projects/${project.slug}`);
      expect(card.getAttribute('aria-label')).toBe(
        `View project ${project.name}`
      );

      for (const technology of project.technologies) {
        expect(text).toContain(technology);
      }
    });
  });

  it('should navigate to the project detail route when a card is opened', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/');

    const card = harness.routeNativeElement?.querySelector(
      `a[href="/projects/${PROJECTS[0].slug}"]`
    ) as HTMLAnchorElement;

    expect(card).toBeTruthy();
    card.click();
    await harness.navigateByUrl(`/projects/${PROJECTS[0].slug}`);

    const detail = harness.routeNativeElement as HTMLElement;
    expect(detail.querySelector('h1')?.textContent).toContain(PROJECTS[0].name);
  });
});
