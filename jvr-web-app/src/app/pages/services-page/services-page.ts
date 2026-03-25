import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeader } from '../../shared/section-header/section-header';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink, SectionHeader],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPage {
  capabilities = [
    {
      id: 'full-stack',
      icon: 'pi-code',
      colorClass: 'blue',
      title: 'Full-Stack Application Development',
      description:
        'From Angular, React, and Vue on the front end to .NET / C# and Node.js on the back end — we build enterprise-grade applications that handle complex workflows and scale with your business. We specialize in internal systems and B2B integrations, not consumer-facing marketing sites.',
      tags: ['Angular', 'React', 'Vue', '.NET / C#', 'Node.js', 'TypeScript'],
      bestFor: 'New enterprise systems or rewrites of outdated internal applications.',
    },
    {
      id: 'cloud',
      icon: 'pi-cloud',
      colorClass: 'purple',
      title: 'Cloud Architecture & Migration',
      description:
        'We design and implement cloud solutions on Azure and AWS — and have been growing our Google Cloud expertise as well. This includes infrastructure architecture, on-prem to cloud migrations, Azure Data Factory pipelines, and message queue systems like Kafka and RabbitMQ.',
      tags: ['Azure', 'AWS', 'Azure Data Factory', 'Kafka', 'RabbitMQ'],
      bestFor:
        'Organizations modernizing legacy infrastructure or moving large workloads to the cloud.',
    },
    {
      id: 'etl',
      icon: 'pi-database',
      colorClass: 'orange',
      title: 'ETL & Data Pipelines',
      description:
        'We have deep expertise in large-scale data movement — whether for internal system functionality, cloud migrations, or analytics workflows. We have handled complex transformations, phased migrations running two systems in parallel, and built reconciliation pipelines to ensure data integrity throughout.',
      tags: ['Azure Data Factory', 'SQL Server', 'Kafka', 'Data Transformation'],
      bestFor:
        'Organizations with large datasets to migrate, transform, or move between systems.',
    },
    {
      id: 'testing',
      icon: 'pi-check-circle',
      colorClass: 'blue',
      title: 'Automated Testing & QA',
      description:
        'We build automated test suites for UI and API layers using Playwright and custom frameworks, integrated directly into your CI/CD pipeline. We have also built supporting tooling to track test outcomes against documented test cases — and leveraged AI to generate more comprehensive coverage in significantly less time.',
      tags: ['Playwright', 'CI/CD Integration', 'API Testing', 'AI-Assisted Testing'],
      bestFor:
        'Enterprise teams that need reliable regression coverage without slowing release cycles.',
    },
    {
      id: 'ai',
      icon: 'pi-microchip',
      colorClass: 'purple',
      title: 'AI Workflow Integration',
      description:
        'We have integrated AI into our own processes and helped clients do the same — using it as a guide and accelerator, while our team still owns the work. We build orchestrations with Semantic Kernel and OpenAI, and have used Claude and Qwen as active development partners.',
      tags: ['Semantic Kernel', 'OpenAI GPTs', 'Claude', 'Azure AI Search', 'Qwen'],
      bestFor:
        'Teams looking for real, practical AI adoption — focused on outcomes, not hype.',
    },
    {
      id: 'team',
      icon: 'pi-users',
      colorClass: 'orange',
      title: 'Team Integration & Augmentation',
      description:
        'When you have the team but need more capacity or specialized skills for a specific initiative, we embed directly with your group. We adopt your tools, attend your standups, and contribute as a natural extension of your team — not a separate vendor managing a separate queue.',
      tags: ['Embedded Consulting', 'Staff Augmentation', 'Agile / Kanban', 'Long-Term Engagements'],
      bestFor:
        'Large enterprise initiatives where capacity or specialized skills are the gap.',
    },
  ];

  techStack = [
    {
      category: 'Languages',
      colorClass: 'blue',
      items: ['C# / .NET', 'Node.js', 'TypeScript', 'JavaScript'],
    },
    {
      category: 'Front End',
      colorClass: 'purple',
      items: ['Angular', 'React', 'Vue', 'Svelte'],
    },
    {
      category: 'Cloud',
      colorClass: 'orange',
      items: ['Azure', 'AWS', 'Google Cloud'],
    },
    {
      category: 'Data & Integration',
      colorClass: 'blue',
      items: ['Azure Data Factory', 'Kafka', 'RabbitMQ', 'SQL Server'],
    },
    {
      category: 'AI & Search',
      colorClass: 'purple',
      items: ['Semantic Kernel', 'OpenAI GPTs', 'Azure AI Search', 'Claude'],
    },
    {
      category: 'Quality & Security',
      colorClass: 'orange',
      items: ['Playwright', 'SonarQube', 'Veracode', 'CI/CD Integration'],
    },
  ];

  engagementModels = [
    {
      icon: 'pi-clock',
      colorClass: 'blue',
      title: 'Time & Materials',
      description:
        'All of our work is time and materials. We provide high-level estimates upfront and work with you to define a schedule of deliverables that fits your budget — no hidden assumptions baked into a fixed-bid scope.',
    },
    {
      icon: 'pi-send',
      colorClass: 'purple',
      title: 'Pilot Engagements',
      description:
        'We encourage clients who are not ready for a full build to start small. A focused pilot lets you validate assumptions, prove value to stakeholders, and build confidence before committing to a larger investment.',
    },
    {
      icon: 'pi-refresh',
      colorClass: 'orange',
      title: 'Long-Term Partnerships',
      description:
        'Most of our work is sustained engagement within existing client teams — often spanning months to years. After any project delivery, we offer retainer agreements to stay available for ongoing support and new work.',
    },
  ];

  honestLimits = [
    'Marketing websites and consumer-facing promotional sites',
    'UI / UX design work — we build systems, not storefronts',
    'Fixed-scope, fixed-bid project proposals',
    'Early-stage startups without established infrastructure',
  ];
}
