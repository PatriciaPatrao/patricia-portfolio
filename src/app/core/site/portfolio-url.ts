/**
 * Resolves the public portfolio home URL for sharing and QR codes.
 *
 * Prefers a configured absolute http(s) URL when valid; otherwise uses
 * the current origin. Always returns the site root (trailing slash).
 */
export function resolvePortfolioUrl(
  configured: string | null | undefined,
  origin: string | null | undefined
): string | null {
  const fromConfig = normalizeAbsoluteUrl(configured);
  if (fromConfig) {
    return toSiteRoot(fromConfig);
  }

  const fromOrigin = normalizeOrigin(origin);
  if (fromOrigin) {
    return toSiteRoot(fromOrigin);
  }

  return null;
}

function normalizeAbsoluteUrl(value: string | null | undefined): string | null {
  if (!value || typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  try {
    const url = new URL(trimmed);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return null;
    }
    return url.origin;
  } catch {
    return null;
  }
}

function normalizeOrigin(origin: string | null | undefined): string | null {
  if (!origin || typeof origin !== 'string') {
    return null;
  }

  const trimmed = origin.trim();
  if (!trimmed) {
    return null;
  }

  try {
    const url = new URL(trimmed);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return null;
    }
    return url.origin;
  } catch {
    return null;
  }
}

function toSiteRoot(origin: string): string {
  return `${origin}/`;
}
