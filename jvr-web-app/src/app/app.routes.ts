import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/landing-page/landing-page').then(m => m.LandingPage) },
  { path: 'home',         loadComponent: () => import('./pages/homepage/homepage').then(m => m.Homepage) },
  { path: 'services',     loadComponent: () => import('./pages/services-page/services-page').then(m => m.ServicesPage) },
  { path: 'why-us',       loadComponent: () => import('./pages/why-us-page/why-us-page').then(m => m.WhyUsPage) },
  { path: 'about',        loadComponent: () => import('./pages/about-us/about-us').then(m => m.AboutUs) },
  { path: 'contact',      loadComponent: () => import('./pages/contact-page/contact-page').then(m => m.ContactPage) },
  { path: 'case-studies', loadComponent: () => import('./pages/case-study/case-study').then(m => m.CaseStudy) },
  { path: '**', redirectTo: '' },
];
