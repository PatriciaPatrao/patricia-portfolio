import { TestBed } from '@angular/core/testing';

import { Contact } from './contact';

describe('Contact', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();
  });

  it('should render mailto and external contact links', async () => {
    const fixture = TestBed.createComponent(Contact);
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;
    const links = Array.from(root.querySelectorAll('a')) as HTMLAnchorElement[];

    const email = links.find((link) =>
      link.textContent?.includes('EMAIL')
    ) as HTMLAnchorElement;
    const linkedIn = links.find((link) =>
      link.textContent?.includes('LINKEDIN')
    ) as HTMLAnchorElement;
    const github = links.find((link) =>
      link.textContent?.includes('GITHUB')
    ) as HTMLAnchorElement;

    expect(email.getAttribute('href')).toBe(
      'mailto:ppatraocarvalho93@gmail.com'
    );
    // Production binds [target]="null" for non-external links, which
    // currently serialises as the attribute value "null" rather than omitting it.
    expect(email.getAttribute('target')).not.toBe('_blank');

    expect(linkedIn.getAttribute('href')).toBe(
      'https://www.linkedin.com/in/patriciapatrao/'
    );
    expect(linkedIn.getAttribute('target')).toBe('_blank');
    expect(linkedIn.getAttribute('rel')).toBe('noopener noreferrer');

    expect(github.getAttribute('href')).toBe(
      'https://github.com/PatriciaPatrao'
    );
    expect(github.getAttribute('target')).toBe('_blank');
    expect(github.getAttribute('rel')).toBe('noopener noreferrer');
  });
});
