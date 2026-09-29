/**
 * Absolute public portfolio URL used for Share / Send (email, WhatsApp,
 * LinkedIn, QR). Prefer this over the current browser origin so local
 * development does not share localhost.
 *
 * When moving to a custom domain, update this value once.
 */
export const SITE_CONFIG = {
  publicUrl: 'https://patricia-patrao-portfolio.vercel.app/',
} as const;
