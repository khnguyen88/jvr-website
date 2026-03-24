import { Injectable, NgZone, OnDestroy } from '@angular/core';
import Lenis from 'lenis';

@Injectable({ providedIn: 'root' })
export class SmoothScrollService implements OnDestroy {
  private lenis: Lenis | null = null;
  private rafId: number | null = null;

  constructor(private ngZone: NgZone) {}

  init(): void {
    this.ngZone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      const raf = (time: number) => {
        this.lenis!.raf(time);
        this.rafId = requestAnimationFrame(raf);
      };
      this.rafId = requestAnimationFrame(raf);
    });
  }

  scrollToTop(): void {
    this.lenis?.scrollTo(0, { immediate: true });
  }

  ngOnDestroy(): void {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.lenis?.destroy();
    this.lenis = null;
  }
}
