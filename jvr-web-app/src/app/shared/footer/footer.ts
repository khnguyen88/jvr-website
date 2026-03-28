import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SmoothScrollService } from '../../services/smooth-scroll.service';
import { ScrollStateService } from '../../services/scroll-state.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly smoothScroll = inject(SmoothScrollService);
  readonly scrollState = inject(ScrollStateService);
  year = new Date().getFullYear();

  /** True when a content section (not the hero) is the active section. */
  readonly sectionActive = computed(() => this.scrollState.activeSection() !== 'hero');
}
