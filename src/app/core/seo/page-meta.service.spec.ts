import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';

import {
  DEFAULT_PAGE_DESCRIPTION,
  DEFAULT_PAGE_TITLE,
  NOT_FOUND_PAGE_DESCRIPTION,
  NOT_FOUND_PAGE_TITLE,
  PageMetaService,
} from './page-meta.service';

describe('PageMetaService', () => {
  let service: PageMetaService;
  let title: Title;
  let meta: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageMetaService);
    title = TestBed.inject(Title);
    meta = TestBed.inject(Meta);
  });

  it('should set the document title and social meta tags', () => {
    service.set('Custom Title', 'Custom description');

    expect(title.getTitle()).toBe('Custom Title');
    expect(meta.getTag('name="description"')?.content).toBe(
      'Custom description'
    );
    expect(meta.getTag('property="og:title"')?.content).toBe('Custom Title');
    expect(meta.getTag('property="og:description"')?.content).toBe(
      'Custom description'
    );
    expect(meta.getTag('name="twitter:title"')?.content).toBe('Custom Title');
    expect(meta.getTag('name="twitter:description"')?.content).toBe(
      'Custom description'
    );
  });

  it('should apply the default homepage metadata', () => {
    service.setDefault();

    expect(title.getTitle()).toBe(DEFAULT_PAGE_TITLE);
    expect(meta.getTag('name="description"')?.content).toBe(
      DEFAULT_PAGE_DESCRIPTION
    );
  });

  it('should apply the not-found metadata', () => {
    service.setNotFound();

    expect(title.getTitle()).toBe(NOT_FOUND_PAGE_TITLE);
    expect(meta.getTag('name="description"')?.content).toBe(
      NOT_FOUND_PAGE_DESCRIPTION
    );
  });
});
