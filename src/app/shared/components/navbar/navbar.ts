import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/theme/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})

export class Navbar {
  private readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);
  private readonly viewportScroller = inject(ViewportScroller);

  readonly theme = this.themeService.theme;

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  /** Same-URL HOME clicks are ignored by the router; scroll to the top explicitly. */
  onHomeClick(): void {
    if (this.router.url === '/') {
      this.viewportScroller.scrollToPosition([0, 0]);
    }
  }
}
