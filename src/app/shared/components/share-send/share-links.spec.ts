import {
  SHARE_EMAIL_SUBJECT,
  SHARE_MESSAGE,
  buildEmailShareUrl,
  buildLinkedInShareUrl,
  buildWhatsAppShareUrl,
} from './share-links';

const PORTFOLIO_URL = 'https://portfolio.example/';

describe('share-links', () => {
  it('builds a mailto URL with subject, message, and portfolio URL', () => {
    const href = buildEmailShareUrl(PORTFOLIO_URL);

    expect(href.startsWith('mailto:?')).toBe(true);
    expect(href).toContain(`subject=${encodeURIComponent(SHARE_EMAIL_SUBJECT)}`);
    expect(href).toContain(
      `body=${encodeURIComponent(`${SHARE_MESSAGE}\n\n${PORTFOLIO_URL}`)}`
    );
  });

  it('builds a WhatsApp share URL with message and portfolio URL', () => {
    const href = buildWhatsAppShareUrl(PORTFOLIO_URL);

    expect(href).toBe(
      `https://wa.me/?text=${encodeURIComponent(`${SHARE_MESSAGE}\n\n${PORTFOLIO_URL}`)}`
    );
  });

  it('builds a LinkedIn share-offsite URL with the portfolio URL', () => {
    const href = buildLinkedInShareUrl(PORTFOLIO_URL);

    expect(href).toBe(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PORTFOLIO_URL)}`
    );
  });
});
