import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/theme/theme.service';
import { Navbar } from './shared/components/navbar/navbar';
import { ShareSend } from './shared/components/share-send/share-send';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ShareSend],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  /** Ensures theme is applied even if the navbar is not mounted. */
  private readonly _themeService = inject(ThemeService);
  private readonly viewportScroller = inject(ViewportScroller);

  constructor() {
    // Angular anchorScrolling ignores CSS scroll-padding-top; offset must be set here.
    this.viewportScroller.setOffset([0, 75]);
  }
}
