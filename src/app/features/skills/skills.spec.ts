import { TestBed } from '@angular/core/testing';

import { Skills } from './skills';

describe('Skills', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();
  });

  it('should render the five skill group titles', async () => {
    const fixture = TestBed.createComponent(Skills);
    await fixture.whenStable();

    const text = fixture.nativeElement.textContent as string;

    expect(text).toContain('Frontend');
    expect(text).toContain('Backend & APIs');
    expect(text).toContain('Data & Databases');
    expect(text).toContain('DevOps & Tools');
    expect(text).toContain('Practices');
  });
});
