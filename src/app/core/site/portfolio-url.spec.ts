import { resolvePortfolioUrl } from './portfolio-url';

describe('resolvePortfolioUrl', () => {
  it('uses a valid configured absolute URL as the site root', () => {
    expect(
      resolvePortfolioUrl('https://example.com/path/', 'https://ignored.vercel.app')
    ).toBe('https://example.com/');
  });

  it('falls back to the current origin when config is empty', () => {
    expect(resolvePortfolioUrl('', 'https://patricia-portfolio.vercel.app')).toBe(
      'https://patricia-portfolio.vercel.app/'
    );
  });

  it('falls back to the current origin when config is invalid', () => {
    expect(resolvePortfolioUrl('not-a-url', 'https://portfolio.example')).toBe(
      'https://portfolio.example/'
    );
  });

  it('rejects non-http configured URLs and uses origin', () => {
    expect(resolvePortfolioUrl('ftp://files.example', 'https://portfolio.example')).toBe(
      'https://portfolio.example/'
    );
  });

  it('returns null when both config and origin are unusable', () => {
    expect(resolvePortfolioUrl('', '')).toBeNull();
    expect(resolvePortfolioUrl(null, undefined)).toBeNull();
    expect(resolvePortfolioUrl('javascript:alert(1)', 'not-an-origin')).toBeNull();
  });
});
