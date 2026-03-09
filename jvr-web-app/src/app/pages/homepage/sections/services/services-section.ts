import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { SectionHeader } from '../../../../shared/section-header/section-header';

@Component({
  selector: 'app-services-section',
  imports: [RouterLink, CardModule, SectionHeader],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection {
  services = [
    {
      icon: '🏛️',
      iconColor: 'blue',
      title: 'Enterprise Architecture',
      description:
        'Design resilient, scalable systems that align technology with your business goals—built for growth from day one.',
    },
    {
      icon: '🔗',
      iconColor: 'purple',
      title: 'Systems Integration',
      description:
        'Connect disparate platforms and legacy systems into a unified ecosystem that drives operational efficiency.',
    },
    {
      icon: '☁️',
      iconColor: 'orange',
      title: 'Cloud Transformation',
      description:
        'Migrate, modernize, and optimize your infrastructure on AWS, Azure, or GCP with zero-downtime strategies.',
    },
    {
      icon: '📊',
      iconColor: 'blue',
      title: 'Data & Analytics',
      description:
        'Turn raw data into decision-ready intelligence with robust pipelines, warehousing, and BI dashboards.',
    },
    {
      icon: '🛡️',
      iconColor: 'purple',
      title: 'Security & Compliance',
      description:
        'Embed SOC 2, HIPAA, and ISO 27001 controls into your software delivery lifecycle from the ground up.',
    },
    {
      icon: '🤖',
      iconColor: 'orange',
      title: 'AI & Automation',
      description:
        'Deploy intelligent automation and ML-powered solutions that reduce manual work and surface actionable insights.',
    },
  ];
}
