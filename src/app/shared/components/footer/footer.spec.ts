import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Footer } from './footer';

describe('Footer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the current year and back-to-top link', async () => {
    const fixture = TestBed.createComponent(Footer);
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;
    const year = new Date().getFullYear().toString();

    expect(root.textContent).toContain(year);
    expect(root.textContent).toContain('Patrícia Patrão de Carvalho');

    const backToTop = Array.from(root.querySelectorAll('a')).find((link) =>
      link.textContent?.includes('BACK TO TOP')
    ) as HTMLAnchorElement;

    expect(backToTop.getAttribute('href')).toBe('/#home');
  });
});
