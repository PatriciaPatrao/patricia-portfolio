import { Component } from '@angular/core';

interface ContactLink {
  label: string;
  value: string;
  url: string;
  external?: boolean;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})

export class Contact {
  contactLinks: ContactLink[] = [
    {
      label: 'EMAIL',
      value: 'ppatraocarvalho93@gmail.com',
      url: 'mailto:ppatraocarvalho93@gmail.com'
    },
    {
      label: 'LINKEDIN',
      value: 'LinkedIn',
      url: 'https://www.linkedin.com/in/patriciapatrao/',
      external: true
    },
    {
      label: 'GITHUB',
      value: 'GitHub',
      url: 'https://github.com/PatriciaPatrao',
      external: true
    }
  ];
}