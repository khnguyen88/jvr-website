import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-clients-section',
  imports: [],
  templateUrl: './clients-section.html',
  styleUrl: './clients-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsSection {
  clients = [
    'Nexcorp',
    'Meridian',
    'Vantage Group',
    'Stratos',
    'Apex Systems',
    'Orion Tech',
  ];
}
