import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import {
  DEFAULT_PAGE_DESCRIPTION,
  DEFAULT_PAGE_TITLE,
} from '../../core/seo/page-meta.service';
import { Portfolio } from './portfolio';

describe('Portfolio', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the main portfolio sections and footer', async () => {
    const fixture = TestBed.createComponent(Portfolio);
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('app-home')).toBeTruthy();
    expect(root.querySelector('app-about')).toBeTruthy();
    expect(root.querySelector('app-experience')).toBeTruthy();
    expect(root.querySelector('app-projects')).toBeTruthy();
    expect(root.querySelector('app-skills')).toBeTruthy();
    expect(root.querySelector('app-contact')).toBeTruthy();
    expect(root.querySelector('app-footer')).toBeTruthy();
  });

  it('should expose the section ids required for anchor navigation', async () => {
    const fixture = TestBed.createComponent(Portfolio);
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('#home')).toBeTruthy();
    expect(root.querySelector('#about')).toBeTruthy();
    expect(root.querySelector('#experience')).toBeTruthy();
    expect(root.querySelector('#projects')).toBeTruthy();
    expect(root.querySelector('#skills')).toBeTruthy();
    expect(root.querySelector('#contact')).toBeTruthy();
  });

  it('should apply the default homepage metadata', async () => {
    const fixture = TestBed.createComponent(Portfolio);
    await fixture.whenStable();

    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);

    expect(title.getTitle()).toBe(DEFAULT_PAGE_TITLE);
    expect(meta.getTag('name="description"')?.content).toBe(
      DEFAULT_PAGE_DESCRIPTION
    );
    expect(meta.getTag('property="og:title"')?.content).toBe(
      DEFAULT_PAGE_TITLE
    );
    expect(meta.getTag('property="og:description"')?.content).toBe(
      DEFAULT_PAGE_DESCRIPTION
    );
  });
});
