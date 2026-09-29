import {
  SHARE_EMAIL_SUBJECT,
  SHARE_MESSAGE,
  buildEmailShareUrl,
  buildLinkedInShareUrl,
  buildWhatsAppShareUrl,
} from './share-links';

const PORTFOLIO_URL = 'https://portfolio.example/';

describe('share-links', () => {
  it('builds a mailto URL with subject, message, and portfolio URL only', () => {
    const href = buildEmailShareUrl(PORTFOLIO_URL);
    const decoded = decodeURIComponent(href);

    expect(href.startsWith('mailto:?')).toBe(true);
    expect(href).toContain(`subject=${encodeURIComponent(SHARE_EMAIL_SUBJECT)}`);
    expect(href).toContain(
      `body=${encodeURIComponent(`${SHARE_MESSAGE}\n\n${PORTFOLIO_URL}`)}`
    );
    expect(decoded).not.toMatch(/qr|cid:|data:image|attachment/i);
  });

  it('builds a WhatsApp share URL with message and portfolio URL', () => {
    const href = buildWhatsAppShareUrl(PORTFOLIO_URL);

    expect(href).toBe(
      `https://wa.me/?text=${encodeURIComponent(`${SHARE_MESSAGE}\n\n${PORTFOLIO_URL}`)}`
    );
  });

  it('opens LinkedIn Messages instead of the share-offsite composer', () => {
    const href = buildLinkedInShareUrl(PORTFOLIO_URL);

    expect(href).toBe('https://www.linkedin.com/messaging/');
    expect(href).not.toContain('share-offsite');
    expect(href).not.toContain('sharing/');
  });
});
