import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { App } from './app';
import { routes } from './app.routes';

describe('App routes', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should render the portfolio on the home route', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/');

    const root = harness.routeNativeElement as HTMLElement;
    expect(root.querySelector('#home')).toBeTruthy();
    expect(root.querySelector('#projects')).toBeTruthy();
    expect(root.textContent).toContain('Patrícia Patrão de Carvalho');
  });

  it('should render a project detail for a valid slug', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/projects/greenwatch');

    const root = harness.routeNativeElement as HTMLElement;
    expect(root.querySelector('h1')?.textContent).toContain('GreenWatch');
    expect(root.textContent).toContain('BACK TO PROJECTS');
    expect(root.textContent).not.toContain('This project does not exist');
  });

  it('should render the in-page missing project state for an unknown slug', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/projects/does-not-exist');

    const root = harness.routeNativeElement as HTMLElement;
    expect(root.querySelector('h1')?.textContent).toContain('Project not found');
    expect(root.textContent).toContain(
      'This project does not exist or is no longer available.'
    );
    expect(root.textContent).not.toContain('BACK TO HOMEPAGE');
  });

  it('should render the Not Found page for an unknown route', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/missing-page');

    const root = harness.routeNativeElement as HTMLElement;
    expect(root.querySelector('h1')?.textContent).toContain('Page not found');
    expect(root.textContent).toContain('BACK TO HOMEPAGE');
    expect(root.textContent).toContain('VIEW PROJECTS');
  });
});
