import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, PanelModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
