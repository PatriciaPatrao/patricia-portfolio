import { ViewportScroller } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { ThemeService } from '../../../core/theme/theme.service';
import { routes } from '../../../app.routes';
import { Navbar } from './navbar';

describe('Navbar', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should render the expected navigation items and fragments', async () => {
    const fixture = TestBed.createComponent(Navbar);
    await fixture.whenStable();

    const links = Array.from(
      fixture.nativeElement.querySelectorAll('.nav-links a')
    ) as HTMLAnchorElement[];
    const labels = links.map((link) => link.textContent?.trim());

    expect(labels).toEqual([
      'HOME',
      'ABOUT',
      'EXPERIENCE',
      'PROJECTS',
      'SKILLS',
      'CONTACT',
    ]);

    expect(links[0].getAttribute('href')).toBe('/');
    expect(links[1].getAttribute('href')).toBe('/#about');
    expect(links[2].getAttribute('href')).toBe('/#experience');
    expect(links[3].getAttribute('href')).toBe('/#projects');
    expect(links[4].getAttribute('href')).toBe('/#skills');
    expect(links[5].getAttribute('href')).toBe('/#contact');

    const logo = fixture.nativeElement.querySelector('.logo') as HTMLAnchorElement;
    expect(logo.textContent).toContain('PATRÍCIA');
    expect(logo.getAttribute('href')).toBe('/');
  });

  it('should scroll to the top when HOME is clicked on the home route', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/');

    const fixture = TestBed.createComponent(Navbar);
    await fixture.whenStable();

    const viewportScroller = TestBed.inject(ViewportScroller);
    const scrollSpy = vi.spyOn(viewportScroller, 'scrollToPosition');

    const homeLink = fixture.debugElement.query(
      By.css('.nav-links a')
    );
    homeLink.triggerEventHandler('click', new MouseEvent('click'));

    expect(scrollSpy).toHaveBeenCalledWith([0, 0]);
  });

  it('should navigate home from a project detail without scrolling while still on that URL', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/projects/greenwatch');

    const fixture = TestBed.createComponent(Navbar);
    await fixture.whenStable();

    const router = TestBed.inject(Router);
    const viewportScroller = TestBed.inject(ViewportScroller);
    const scrollSpy = vi.spyOn(viewportScroller, 'scrollToPosition');

    expect(router.url).toBe('/projects/greenwatch');

    const homeLink = fixture.debugElement.query(
      By.css('.nav-links a')
    );
    homeLink.triggerEventHandler('click', new MouseEvent('click'));

    expect(scrollSpy).not.toHaveBeenCalled();

    await router.navigateByUrl('/');
    expect(router.url).toBe('/');
  });

  it('should toggle theme and update the button label and pressed state', async () => {
    const fixture = TestBed.createComponent(Navbar);
    const themeService = TestBed.inject(ThemeService);
    await fixture.whenStable();

    const button = fixture.nativeElement.querySelector(
      'button.theme-toggle'
    ) as HTMLButtonElement;

    expect(themeService.theme()).toBe('dark');
    expect(button.textContent?.trim()).toBe('Dark');
    expect(button.getAttribute('aria-label')).toBe('Switch to light mode');
    expect(button.getAttribute('aria-pressed')).toBe('false');

    button.click();
    await fixture.whenStable();

    expect(themeService.theme()).toBe('light');
    expect(button.textContent?.trim()).toBe('Light');
    expect(button.getAttribute('aria-label')).toBe('Switch to dark mode');
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
