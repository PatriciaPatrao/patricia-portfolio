import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, Footer],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound {}
