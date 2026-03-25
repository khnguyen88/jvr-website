import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-top-menubar',
  imports: [MenubarModule, ButtonModule, RouterModule],
  templateUrl: './top-menubar.html',
  styleUrl: './top-menubar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenubar {
  readonly themeService = inject(ThemeService);
  readonly items: MenuItem[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'About', routerLink: '/about' },
    { label: 'Why Us', routerLink: '/why-us' },
    { label: 'Services', routerLink: '/services' },
    { label: 'Case Studies', routerLink: '/case-studies' },
    { label: 'Contact', routerLink: '/contact' },
    { label: 'Get Started', routerLink: '/contact', styleClass: 'mobile-cta-item' },
  ];
}
