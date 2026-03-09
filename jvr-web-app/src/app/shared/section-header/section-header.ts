import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
})
export class SectionHeader {
  /** Small uppercase tag above the heading */
  @Input() label = '';

  /** Body copy below the heading (plain text) */
  @Input() sub = '';

  /** Text alignment for the block */
  @Input() align: 'center' | 'left' = 'center';

  /**
   * Set true when placed on a dark background — switches
   * heading and sub to light text colours automatically.
   */
  @Input() dark = false;
}
