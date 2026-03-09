import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { SectionHeader } from '../../../../shared/section-header/section-header';

@Component({
  selector: 'app-why-jvr-section',
  imports: [RouterLink, ProgressBarModule, SectionHeader],
  templateUrl: './why-jvr-section.html',
  styleUrl: './why-jvr-section.css',
})
export class WhyJvrSection {
  features = [
    {
      icon: '🎯',
      dotColor: 'blue',
      title: 'Outcome-Driven Methodology',
      description:
        "Every engagement is anchored to measurable KPIs. We define success metrics upfront so you always know what you're getting.",
    },
    {
      icon: '🔒',
      dotColor: 'purple',
      title: 'Enterprise-Grade Security',
      description:
        'SOC 2 Type II compliant processes baked into every phase—security is never an afterthought.',
    },
    {
      icon: '⚡',
      dotColor: 'orange',
      title: 'Rapid Time-to-Value',
      description:
        'Our phased delivery model gets working software into your hands within 90 days of kickoff.',
    },
    {
      icon: '🤝',
      dotColor: 'blue',
      title: 'Dedicated Partnership Model',
      description:
        'A senior consultant owns your account end-to-end. No bait-and-switch staffing, ever.',
    },
  ];

  metrics = [
    { label: 'Client Satisfaction', value: '97%', pct: 97 },
    { label: 'On-Time Delivery', value: '94%', pct: 94 },
    { label: 'Cost Reduction', value: '38%', pct: 38 },
    { label: 'Performance Uplift', value: '2.4×', pct: 80 },
    { label: 'Scope Accuracy', value: '91%', pct: 91 },
  ];
}
