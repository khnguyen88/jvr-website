import { Injectable, inject, NgZone } from '@angular/core';
import { SmoothScrollService } from './smooth-scroll.service';

/**
 * FocusService provides consistent scroll + focus management for navigation.
 *
 * Following best practices:
 * - Scrolls smoothly to target element
 * - Moves keyboard focus to the target for screen reader users
 * - Adds 80px offset to account for fixed navigation
 * - Records the focused element for potential restoration
 */
@Injectable({ providedIn: 'root' })
export class FocusService {
  private readonly smoothScroll = inject(SmoothScrollService);
  private readonly ngZone = inject(NgZone);

  private previousActiveElement: HTMLElement | null = null;
  private readonly NAV_OFFSET = 80; // Fixed offset for the menubar height

  /**
   * Scrolls to an element by ID and moves focus to it.
   * Use this for all section navigation to ensure accessibility.
   *
   * @param elementId The ID of the element to scroll to and focus
   * @param behavior Scroll behavior ('smooth' or 'auto')
   */
  scrollToAndFocus(elementId: string, behavior: ScrollBehavior = 'smooth'): void {
    const element = document.getElementById(elementId);

    if (!element) {
      console.warn(`FocusService: Element with id "${elementId}" not found`);
      return;
    }

    // Store the currently focused element for potential restoration
    this.previousActiveElement = document.activeElement as HTMLElement;

    // Scroll to element with offset for fixed nav using smoothScroll
    // Then move focus after scroll completes
    this.smoothScroll.scrollTo(elementId);

    // Update the URL hash immediately (smoothScroll does this, but being explicit)
    if (window.location.hash !== `#${elementId}`) {
      window.history.pushState(null, '', `#${elementId}`);
    }

    // Move focus after scroll completes
    // Using requestAnimationFrame to ensure DOM has settled
    // The scroll duration is 1.4s per SmoothScrollService configuration
    const scrollDuration = 1400;
    setTimeout(() => {
      this.ngZone.run(() => {
        element.focus({ preventScroll: true });
        element.setAttribute('tabindex', '-1');
        element.setAttribute('role', 'region');
      });
    }, scrollDuration);
  }

  /**
   * Scrolls to an element without focusing.
   * Use when you only need to scroll (e.g., form submission).
   *
   * @param elementId The ID of the element to scroll to
   */
  scrollTo(elementId: string): void {
    this.smoothScroll.scrollTo(elementId);
  }

  /**
   * Restores focus to the previously focused element.
   * Call this when closing a modal or returning from a detour.
   */
  restoreFocus(): void {
    if (this.previousActiveElement && this.previousActiveElement.focus) {
      this.ngZone.run(() => {
        this.previousActiveElement?.focus();
      });
    }
  }

  /**
   * Gets the offset used for scroll positioning.
   * This accounts for the fixed navigation height.
   */
  getScrollOffset(): number {
    return this.NAV_OFFSET;
  }
}
