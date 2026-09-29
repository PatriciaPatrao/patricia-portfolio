export const SHARE_EMAIL_SUBJECT =
  'Portfolio — Patrícia Patrão de Carvalho';

export const SHARE_MESSAGE =
  'I thought you might find this portfolio interesting:';

export function buildEmailShareUrl(portfolioUrl: string): string {
  const subject = encodeURIComponent(SHARE_EMAIL_SUBJECT);
  const body = encodeURIComponent(`${SHARE_MESSAGE}\n\n${portfolioUrl}`);
  return `mailto:?subject=${subject}&body=${body}`;
}

export function buildWhatsAppShareUrl(portfolioUrl: string): string {
  const text = encodeURIComponent(`${SHARE_MESSAGE}\n\n${portfolioUrl}`);
  return `https://wa.me/?text=${text}`;
}

export function buildLinkedInShareUrl(portfolioUrl: string): string {
  const url = encodeURIComponent(portfolioUrl);
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}
