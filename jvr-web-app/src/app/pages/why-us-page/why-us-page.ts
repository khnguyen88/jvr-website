import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeader } from '../../shared/section-header/section-header';

@Component({
  selector: 'app-why-us-page',
  imports: [RouterLink, SectionHeader],
  templateUrl: './why-us-page.html',
  styleUrl: './why-us-page.css',
})
export class WhyUsPage {
  processSteps = [
    {
      num: '01',
      colorClass: 'blue',
      title: 'Discovery',
      description:
        'We meet with your stakeholders to understand your goals, constraints, and critical success factors. We listen before we plan.',
    },
    {
      num: '02',
      colorClass: 'purple',
      title: 'Planning',
      description:
        'We document requirements, review them with your team, and produce proof-of-concept code or mockups to validate the approach before any production work begins.',
    },
    {
      num: '03',
      colorClass: 'orange',
      title: 'Implementation',
      description:
        'Development is iterative and MVP-first. We deliver working software early and often, with regular stakeholder reviews built into every cycle.',
    },
    {
      num: '04',
      colorClass: 'blue',
      title: 'Delivery & QA',
      description:
        'We define a quality assurance process centered on customer acceptance, finalize the delivery, and include post-launch support to ensure a stable, successful transition.',
    },
  ];

  scenarios = [
    {
      icon: 'pi-building',
      colorClass: 'blue',
      title: 'Large Initiative, Limited Staff',
      description:
        'Your organization has a significant project on the roadmap but does not have the internal capacity to deliver it alone. We integrate with your existing team and deliver as one unified group — no silos, no handoff gaps.',
    },
    {
      icon: 'pi-cog',
      colorClass: 'purple',
      title: 'New Technology, Short Timeline',
      description:
        'Your team is strong, but the project calls for expertise you have not yet built internally — whether that is cloud infrastructure, large-scale ETL, automated testing, or AI integration. We bring the depth; your team provides the context.',
    },
    {
      icon: 'pi-link',
      colorClass: 'orange',
      title: 'Reliability and Quality at Scale',
      description:
        'Enterprise systems need to connect reliably and behave predictably under load. We build and integrate automated testing, establish deployment processes, and help teams maintain quality as their systems grow.',
    },
  ];

  capabilities = [
    {
      icon: 'pi-code',
      colorClass: 'blue',
      fragment: 'full-stack',
      title: 'Full-Stack Development',
      description:
        'We have built enrollment systems, employee scheduling platforms, and retail applications — front to back. Angular, React, and Vue on the front end; .NET / C# and Node.js on the back end. Complex, interconnected systems are our natural environment.',
    },
    {
      icon: 'pi-cloud',
      colorClass: 'purple',
      fragment: 'cloud',
      title: 'Cloud Architecture & Migration',
      description:
        'We have migrated payment platforms, analytics pipelines, and enterprise data systems to Azure and AWS. Our cloud work is not limited to infrastructure — we understand the data, the services, and the business logic that runs on top of it.',
    },
    {
      icon: 'pi-database',
      colorClass: 'orange',
      fragment: 'etl',
      title: 'ETL & Data Pipelines',
      description:
        'We redesigned a pipeline running six hours and cut it to twenty minutes. We have built phased migrations running two systems in parallel with continuous reconciliation. Large-scale data movement, done reliably.',
    },
    {
      icon: 'pi-check-circle',
      colorClass: 'blue',
      fragment: 'testing',
      title: 'Automated Testing & QA',
      description:
        'We have built automated UI and API test programs at multiple enterprise clients — integrated into CI/CD pipelines with custom tooling for tracking outcomes against documented test cases. We have also used AI to generate more thorough coverage in significantly less time.',
    },
    {
      icon: 'pi-microchip',
      colorClass: 'purple',
      fragment: 'ai',
      title: 'AI Workflow Integration',
      description:
        'We use AI as a guide and accelerator, not a shortcut. We have built orchestrations with Semantic Kernel and OpenAI, and use Claude as an active development partner — focused on real productivity gains, not trends.',
    },
    {
      icon: 'pi-users',
      colorClass: 'orange',
      fragment: 'team',
      title: 'Team Augmentation',
      description:
        'This is our most common engagement model. We adopt your tools, join your standups, and deliver as one unified group. The most consistent feedback we get? Clients say they are glad to have us on their team — not working for them, on their team.',
    },
  ];

  miniCaseStudies = [
    {
      industry: 'Retail / Manufacturing',
      colorClass: 'blue',
      fragment: 'forecasting-pipeline',
      stat: '6 hrs → 20 min',
      statLabel: 'Pipeline Runtime',
      challenge:
        'A forecasting pipeline analysts could only run once or twice per day was bottlenecking business decisions.',
      outcome:
        'Runtime cut from six hours to twenty minutes — a full week of scenarios completable in a single day. Nearly 20% cost savings in year one.',
    },
    {
      industry: 'Education',
      colorClass: 'purple',
      fragment: 'enrollment-rules-engine',
      stat: '1 System',
      statLabel: 'Every State. Every School.',
      challenge:
        'A charter school network needed one enrollment system that applied different state-specific acceptance rules per school.',
      outcome:
        'A configurable rules engine handled every state and school variation within a single workflow — no duplicate logic, no separate processes.',
    },
    {
      industry: 'Retail',
      colorClass: 'orange',
      fragment: 'payment-cloud-migration',
      stat: 'Zero',
      statLabel: 'Service Disruption',
      challenge:
        'A major retailer needed to simultaneously switch payment providers and migrate analytics infrastructure from on-prem to Azure.',
      outcome:
        'Both initiatives coordinated in parallel and completed without interrupting live operations.',
    },
    {
      industry: 'Enterprise',
      colorClass: 'blue',
      fragment: 'legacy-data-migration',
      stat: 'Zero Loss',
      statLabel: 'Live Data Integrity',
      challenge:
        'A large enterprise needed to migrate legacy data to a new cloud architecture while keeping both old and new systems live simultaneously.',
      outcome:
        'Continuous reconciliation pipelines ran alongside both systems throughout the migration window, automatically flagging discrepancies in real time.',
    },
    {
      industry: 'Manufacturing · Energy · Retail',
      colorClass: 'purple',
      fragment: 'automated-testing',
      stat: 'UI + API',
      statLabel: 'Automated Coverage',
      challenge:
        'Multiple enterprise clients needed reliable, repeatable test coverage as deployment cadences increased and systems grew more complex.',
      outcome:
        'Playwright-based test suites integrated directly into CI/CD pipelines — with AI-assisted generation delivering broader coverage in significantly less time.',
    },
    {
      industry: 'Energy / Utilities',
      colorClass: 'orange',
      fragment: 'workforce-scheduling',
      stat: '3 Years',
      statLabel: 'Embedded Partnership',
      challenge:
        'A regional energy utility needed a long-term development partner for their active field scheduling platform — not a rotating vendor.',
      outcome:
        'Full-stack feature development, an operational analytics tool, and an 80-page environment guide — eventually onboarding the client\'s own new engineers.',
    },
  ];
}
