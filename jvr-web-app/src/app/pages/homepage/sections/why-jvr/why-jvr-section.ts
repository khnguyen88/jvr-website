import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeader } from '../../../../shared/section-header/section-header';

@Component({
  selector: 'app-why-jvr-section',
  imports: [RouterLink, SectionHeader],
  templateUrl: './why-jvr-section.html',
  styleUrl: './why-jvr-section.css',
})
export class WhyJvrSection {
  features = [
    {
      icon: 'pi-lock',
      dotColor: 'blue',
      title: 'You Own the Solution',
      description:
        'We build within your environment, on your infrastructure. When the engagement ends, the solution is fully yours — documented, understood, and built the way your team works.',
    },
    {
      icon: 'pi-crosshairs',
      dotColor: 'purple',
      title: 'Your Needs Drive the Technology',
      description:
        'We do not arrive with a preferred stack to promote. Every tool we recommend is evaluated on one question: does it genuinely fit your system, your team, and your goals?',
    },
    {
      icon: 'pi-handshake',
      dotColor: 'orange',
      title: 'Clients Call Us Part of Their Team',
      description:
        'The most consistent feedback we hear is that clients are glad to have us on their team — not working for them, on their team. That distinction is how we know an engagement is going well.',
    },
    {
      icon: 'pi-chart-line',
      dotColor: 'blue',
      title: 'The Hard Problems Come to Us',
      description:
        'When difficult tasks come up, clients consistently hand them to us. That kind of trust is earned, not claimed — and it drives how we show up every day.',
    },
  ];

  industries = ['Manufacturing', 'Retail', 'Energy', 'Education', 'Insurance'];

  techStack = ['Azure', 'AWS', 'Angular', 'React', 'Vue', '.NET / C#', 'Node.js', 'Playwright'];
}
