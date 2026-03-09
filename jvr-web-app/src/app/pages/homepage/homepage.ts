import { Component } from '@angular/core';
import { HeroSection } from './sections/hero/hero-section';
import { ClientsSection } from './sections/clients/clients-section';
import { ServicesSection } from './sections/services/services-section';
import { WhyJvrSection } from './sections/why-jvr/why-jvr-section';
import { ProcessSection } from './sections/process/process-section';
import { CtaSection } from './sections/cta/cta-section';

@Component({
  selector: 'app-homepage',
  imports: [HeroSection, ClientsSection, ServicesSection, WhyJvrSection, ProcessSection, CtaSection],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
