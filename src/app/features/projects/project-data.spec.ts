import { PROJECTS } from './project-data';

describe('PROJECTS data', () => {
  const expectedSlugs = [
    'greenwatch',
    'newspace-riscos',
    'newspace-3d',
    'forms',
    'metafacturing',
  ];

  it('should include all expected projects', () => {
    expect(PROJECTS.map((project) => project.slug)).toEqual(expectedSlugs);
  });

  it('should use unique slugs', () => {
    const slugs = PROJECTS.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('should provide the required card and detail fields for every project', () => {
    for (const project of PROJECTS) {
      expect(project.name.trim()).not.toBe('');
      expect(project.slug.trim()).not.toBe('');
      expect(project.category.trim()).not.toBe('');
      expect(project.shortDescription.trim()).not.toBe('');
      expect(project.description.trim()).not.toBe('');
      expect(project.role.trim()).not.toBe('');
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.contributions.length).toBeGreaterThan(0);
    }
  });
});
