import { Routes } from '@angular/router';
import { Cyber } from './cyber/cyber';
import { Home } from './home/home';
import { Fakefacebook } from './fakefacebook/fakefacebook';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'cyberproject',
    component: Cyber,
    title: 'Cybersecurity Culture Project',
  },
  {
    path: 'fake-login',
    component: Fakefacebook,
  },
];
