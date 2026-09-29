import { TestBed } from '@angular/core/testing';

import { Experience } from './experience';

describe('Experience', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience],
    }).compileComponents();
  });

  it('should render the expected roles and companies', async () => {
    const fixture = TestBed.createComponent(Experience);
    await fixture.whenStable();

    const text = fixture.nativeElement.textContent as string;

    expect(text).toContain('Software Developer — R&D / Innovation');
    expect(text).toContain('ISQ');
    expect(text).toContain('Team Leader');
    expect(text).toContain('Microbiology Analyst');
    expect(text).toContain('Recipharm');
  });
});
