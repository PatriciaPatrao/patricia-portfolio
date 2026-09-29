import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home } from './home';

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the hero actions with the expected destinations', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;
    const projectsLink = Array.from(root.querySelectorAll('a')).find((link) =>
      link.textContent?.includes('VIEW PROJECTS')
    ) as HTMLAnchorElement;
    const githubLink = Array.from(root.querySelectorAll('a')).find((link) =>
      link.textContent?.includes('GITHUB')
    ) as HTMLAnchorElement;
    const linkedInLink = Array.from(root.querySelectorAll('a')).find((link) =>
      link.textContent?.includes('LINKEDIN')
    ) as HTMLAnchorElement;

    expect(root.querySelector('h1')?.textContent).toContain(
      'Patrícia Patrão de Carvalho'
    );
    expect(projectsLink.getAttribute('href')).toBe('/#projects');
    expect(githubLink.getAttribute('href')).toBe(
      'https://github.com/PatriciaPatrao'
    );
    expect(githubLink.getAttribute('target')).toBe('_blank');
    expect(githubLink.getAttribute('rel')).toBe('noopener noreferrer');
    expect(linkedInLink.getAttribute('href')).toBe(
      'https://www.linkedin.com/in/patriciapatrao/'
    );
    expect(linkedInLink.getAttribute('target')).toBe('_blank');
    expect(linkedInLink.getAttribute('rel')).toBe('noopener noreferrer');
  });
});
