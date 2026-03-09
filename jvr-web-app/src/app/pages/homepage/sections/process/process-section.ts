import { Component } from '@angular/core';
import { SectionHeader } from '../../../../shared/section-header/section-header';

@Component({
  selector: 'app-process-section',
  imports: [SectionHeader],
  templateUrl: './process-section.html',
  styleUrl: './process-section.css',
})
export class ProcessSection {
  steps = [
    {
      num: '01',
      colorClass: 's1',
      title: 'Discovery & Audit',
      description:
        'We immerse ourselves in your environment—interviewing stakeholders, auditing existing systems, and mapping technical debt to business impact.',
    },
    {
      num: '02',
      colorClass: 's2',
      title: 'Strategy & Roadmap',
      description:
        'From findings we craft a prioritized roadmap with clear milestones, resource plans, and risk mitigation strategies.',
    },
    {
      num: '03',
      colorClass: 's3',
      title: 'Build & Integrate',
      description:
        'Agile sprints, continuous integration, and rigorous QA ensure every release meets your security, performance, and usability standards.',
    },
    {
      num: '04',
      colorClass: 's4',
      title: 'Optimize & Scale',
      description:
        'Post-launch, we monitor performance, iterate on feedback, and scale your solution to meet growing enterprise demand.',
    },
  ];
}
