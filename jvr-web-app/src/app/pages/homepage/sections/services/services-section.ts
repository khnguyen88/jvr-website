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
      icon: 'pi-code',
      iconColor: 'blue',
      title: 'Full-Stack Development',
      fragment: 'full-stack',
      description:
        'Enterprise applications built across the full stack — Angular, React, or Vue on the front end with C#/.NET and Node.js on the back end, designed to handle real complexity at scale.',
    },
    {
      icon: 'pi-cloud',
      iconColor: 'purple',
      title: 'Cloud Architecture',
      fragment: 'cloud',
      description:
        'Azure and AWS architecture, migrations, and ongoing operations. We bring deep platform expertise to cloud infrastructure and enterprise integrations.',
    },
    {
      icon: 'pi-database',
      iconColor: 'orange',
      title: 'ETL & Data Pipelines',
      fragment: 'etl',
      description:
        'Large-scale data movement built for reliability — whether for internal system functionality, cloud migrations, or enterprise analytics workflows.',
    },
    {
      icon: 'pi-check-circle',
      iconColor: 'blue',
      title: 'Automated Testing & QA',
      fragment: 'testing',
      description:
        'Playwright-based and custom automated testing integrated directly into your deployment pipeline — so quality is enforced at every release.',
    },
    {
      icon: 'pi-microchip',
      iconColor: 'purple',
      title: 'AI Workflow Integration',
      fragment: 'ai',
      description:
        'Practical AI adoption into existing development workflows and business processes — focused on real utility and measurable outcomes, not trends.',
    },
    {
      icon: 'pi-users',
      iconColor: 'orange',
      title: 'Team Augmentation',
      fragment: 'team',
      description:
        'When you need more capacity or specialized skills, we embed directly with your team — adopting your tools and delivering as one unified group.',
    },
  ];
}
