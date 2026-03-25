import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../../../../shared/section-header/section-header';

@Component({
  selector: 'app-process-section',
  imports: [SectionHeader],
  templateUrl: './process-section.html',
  styleUrl: './process-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessSection {
  steps = [
    {
      num: '01',
      colorClass: 's1',
      title: 'Discovery',
      description: 'We listen before we plan — defining goals and critical success factors directly with your stakeholders.',
    },
    {
      num: '02',
      colorClass: 's2',
      title: 'Planning',
      description: 'Requirements are documented and validated with proof-of-concept code before any production work begins.',
    },
    {
      num: '03',
      colorClass: 's3',
      title: 'Implementation',
      description: 'Iterative, MVP-first development with working software delivered early and stakeholder reviews built in.',
    },
    {
      num: '04',
      colorClass: 's4',
      title: 'Delivery & QA',
      description: 'Customer acceptance defines quality — with post-launch support included to ensure a stable transition.',
    },
  ];
}
