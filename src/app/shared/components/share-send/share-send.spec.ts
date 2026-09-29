import { TestBed } from '@angular/core/testing';
import QRCode from 'qrcode';

import {
  buildEmailShareUrl,
  buildLinkedInShareUrl,
  buildWhatsAppShareUrl,
} from './share-links';
import { ShareSend } from './share-send';

describe('ShareSend', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareSend],
    }).compileComponents();

    vi.spyOn(QRCode, 'toString').mockImplementation(
      (() =>
        Promise.resolve(
          '<svg data-testid="qr-mock"></svg>'
        )) as typeof QRCode.toString
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the Share / Send action', async () => {
    const fixture = TestBed.createComponent(ShareSend);
    await fixture.whenStable();

    const trigger = fixture.nativeElement.querySelector(
      'button.share-trigger'
    ) as HTMLButtonElement;

    expect(trigger).toBeTruthy();
    expect(trigger.textContent?.trim()).toBe('SHARE / SEND');
    expect(trigger.getAttribute('aria-haspopup')).toBe('dialog');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });

  it('opens and closes the share dialog', async () => {
    const fixture = TestBed.createComponent(ShareSend);
    const component = fixture.componentInstance;
    await fixture.whenStable();

    const trigger = fixture.nativeElement.querySelector(
      'button.share-trigger'
    ) as HTMLButtonElement;

    trigger.click();
    await fixture.whenStable();

    expect(component.isOpen()).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(
      fixture.nativeElement.querySelector('#share-send-dialog')
    ).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Share / Send');

    const closeButton = fixture.nativeElement.querySelector(
      'button.share-close'
    ) as HTMLButtonElement;
    closeButton.click();
    await fixture.whenStable();

    expect(component.isOpen()).toBe(false);
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(
      fixture.nativeElement.querySelector('#share-send-dialog')
    ).toBeNull();
  });

  it('closes the dialog when Escape is pressed', async () => {
    const fixture = TestBed.createComponent(ShareSend);
    const component = fixture.componentInstance;
    await fixture.whenStable();

    component.open();
    await fixture.whenStable();
    expect(component.isOpen()).toBe(true);

    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })
    );
    await fixture.whenStable();

    expect(component.isOpen()).toBe(false);
  });

  it('builds email, WhatsApp, and LinkedIn share URLs for the portfolio URL', async () => {
    const fixture = TestBed.createComponent(ShareSend);
    const component = fixture.componentInstance;
    component.open();
    await fixture.whenStable();
    await Promise.resolve();
    fixture.detectChanges();

    const url = component.portfolioUrl();
    expect(url).toMatch(/^https?:\/\//);

    const root = fixture.nativeElement as HTMLElement;
    const email = root.querySelector(
      'a[aria-label="Share portfolio by email"]'
    ) as HTMLAnchorElement;
    const whatsapp = root.querySelector(
      'a[aria-label="Share portfolio on WhatsApp"]'
    ) as HTMLAnchorElement;
    const linkedin = root.querySelector(
      'a[aria-label="Share portfolio on LinkedIn"]'
    ) as HTMLAnchorElement;

    expect(email.getAttribute('href')).toBe(buildEmailShareUrl(url!));
    expect(whatsapp.getAttribute('href')).toBe(buildWhatsAppShareUrl(url!));
    expect(linkedin.getAttribute('href')).toBe(buildLinkedInShareUrl(url!));
  });

  it('generates a QR code using the portfolio URL', async () => {
    const fixture = TestBed.createComponent(ShareSend);
    const component = fixture.componentInstance;
    component.open();
    await fixture.whenStable();
    await Promise.resolve();
    await Promise.resolve();
    fixture.detectChanges();

    const url = component.portfolioUrl();
    expect(url).toBeTruthy();
    expect(QRCode.toString).toHaveBeenCalledWith(
      url,
      expect.objectContaining({ type: 'svg' })
    );
    expect(
      fixture.nativeElement.querySelector('.share-qr[role="img"]')
    ).toBeTruthy();
  });

  it('shows an unavailable state when the portfolio URL is missing', async () => {
    const fixture = TestBed.createComponent(ShareSend);
    const component = fixture.componentInstance;
    await fixture.whenStable();

    component.isOpen.set(true);
    component.portfolioUrl.set(null);
    component.emailHref.set('');
    component.whatsappHref.set('');
    component.linkedinHref.set('');
    component.qrSvg.set(null);
    fixture.detectChanges();

    const root = fixture.nativeElement as HTMLElement;
    expect(root.textContent).toContain('Portfolio link is unavailable');
    expect(
      root.querySelector('a[aria-label="Share portfolio by email"]')
    ).toBeNull();
  });
});
