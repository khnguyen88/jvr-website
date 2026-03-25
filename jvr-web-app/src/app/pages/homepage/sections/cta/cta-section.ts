import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cta-section',
  imports: [RouterModule, ButtonModule],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaSection {}
