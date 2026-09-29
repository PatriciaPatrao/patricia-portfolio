import {
  afterNextRender,
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import QRCode from 'qrcode';

import { resolvePortfolioUrl } from '../../../core/site/portfolio-url';
import { SITE_CONFIG } from '../../../core/site/site.config';
import {
  buildEmailShareUrl,
  buildLinkedInShareUrl,
  buildWhatsAppShareUrl,
} from './share-links';

@Component({
  selector: 'app-share-send',
  templateUrl: './share-send.html',
  styleUrl: './share-send.scss',
})
export class ShareSend {
  private readonly sanitizer = inject(DomSanitizer);

  private readonly triggerRef =
    viewChild<ElementRef<HTMLButtonElement>>('shareTrigger');
  private readonly dialogRef =
    viewChild<ElementRef<HTMLDivElement>>('shareDialog');
  private readonly closeRef =
    viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  readonly isOpen = signal(false);
  readonly portfolioUrl = signal<string | null>(null);
  readonly qrSvg = signal<SafeHtml | null>(null);
  readonly copyFeedback = signal('');
  readonly emailHref = signal('');
  readonly whatsappHref = signal('');
  readonly linkedinHref = signal('');

  private previouslyFocused: HTMLElement | null = null;

  constructor() {
    afterNextRender(() => {
      this.refreshPortfolioUrl();
    });
  }

  open(): void {
    this.refreshPortfolioUrl();
    this.previouslyFocused = document.activeElement as HTMLElement | null;
    this.isOpen.set(true);
    this.copyFeedback.set('');

    setTimeout(() => {
      this.closeRef()?.nativeElement.focus();
    }, 0);
  }

  close(): void {
    if (!this.isOpen()) {
      return;
    }

    this.isOpen.set(false);
    this.copyFeedback.set('');

    setTimeout(() => {
      const trigger = this.triggerRef()?.nativeElement;
      if (trigger) {
        trigger.focus();
        return;
      }
      this.previouslyFocused?.focus();
    }, 0);
  }

  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  async copyUrl(): Promise<void> {
    const url = this.portfolioUrl();
    if (!url) {
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      this.copyFeedback.set('Copied');
    } catch {
      this.copyFeedback.set('Copy unavailable');
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.isOpen()) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }

    if (event.key === 'Tab') {
      this.trapFocus(event);
    }
  }

  private refreshPortfolioUrl(): void {
    const origin =
      typeof window !== 'undefined' ? window.location.origin : '';
    const url = resolvePortfolioUrl(SITE_CONFIG.publicUrl, origin);
    this.portfolioUrl.set(url);

    if (!url) {
      this.emailHref.set('');
      this.whatsappHref.set('');
      this.linkedinHref.set('');
      this.qrSvg.set(null);
      return;
    }

    this.emailHref.set(buildEmailShareUrl(url));
    this.whatsappHref.set(buildWhatsAppShareUrl(url));
    this.linkedinHref.set(buildLinkedInShareUrl(url));
    void this.renderQr(url);
  }

  private async renderQr(url: string): Promise<void> {
    try {
      const svg = await QRCode.toString(url, {
        type: 'svg',
        margin: 1,
        width: 160,
        color: {
          dark: '#0d1218',
          light: '#ffffff',
        },
      });
      this.qrSvg.set(this.sanitizer.bypassSecurityTrustHtml(svg));
    } catch {
      this.qrSvg.set(null);
    }
  }

  private trapFocus(event: KeyboardEvent): void {
    const dialog = this.dialogRef()?.nativeElement;
    if (!dialog) {
      return;
    }

    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter(
      (el) =>
        !el.hasAttribute('disabled') &&
        el.getAttribute('aria-hidden') !== 'true' &&
        el.offsetParent !== null
    );

    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (event.shiftKey) {
      if (active === first || !dialog.contains(active)) {
        event.preventDefault();
        last.focus();
      }
      return;
    }

    if (active === last || !dialog.contains(active)) {
      event.preventDefault();
      first.focus();
    }
  }
}
