# Systemic Improvements Implementation Plan

**Status**: In Progress
**Last Updated**: 2026-04-07 20:07

## Current Step

Integrating FocusService into MegaPage component for consistent scroll+focus navigation.

## Completed Steps

- [x] Created FocusService (`jvr-web-app/src/app/services/focus.service.ts`)
- [x] Audited touch targets for 44x44px minimum
- [x] Standardized ContactForm field patterns per Angular Signal Forms guidelines
- [x] Fixed ngModel pattern for inquiryType field
- [x] Updated validation to return `undefined` instead of `null`
- [x] Added `onPhoneChange()` method for model updates

## Remaining Steps

- [ ] Integrate FocusService into MegaPage component
  - Inject `FocusService`
  - Replace `smoothScroll.scrollTo()` calls with `focusService.scrollToAndFocus()`
  - Add `tabindex="-1"` to section headers

- [ ] Update Footer component for active section indication
  - Add `aria-current="page"` to active footer links

- [ ] Update MegaPage hero pills nav
  - Add `role="navigation"` to pill container

## Key Files

- `jvr-web-app/src/app/services/focus.service.ts` - New service (created)
- `jvr-web-app/src/app/pages/mega-page/mega-page.ts` - Needs FocusService integration
- `jvr-web-app/src/app/pages/mega-page/mega-page.html` - May need aria updates
- `jvr-web-app/src/app/shared/footer/footer.ts` - Needs aria-current updates
- `jvr-web-app/src/app/shared/footer/footer.html` - Needs aria-current updates
- `jvr-web-app/src/app/shared/contact-form/contact-form.ts` - Standardized (completed)
- `jvr-web-app/src/app/shared/contact-form/contact-form.html` - Standardized (completed)

## Architecture Decisions

- **FocusService**: Created at service level for reusability across all components
- **Touch target standard**: 44x44px minimum per WCAG 2.2
- **Form patterns**: Prioritize `formField` API, fallback to ngModel when PrimeNG doesn't support formField
- **Validation**: Use built-in validators (`required()`, `email()`) where possible, custom `validate()` for complex rules
- **Model updates**: Use `model.update()` pattern, not direct field mutation

## Blockers

None currently.

## Notes

- Build is passing after ContactForm standardization
- FocusService ready for integration
- P1/P2 issues identified in audit need addressing
- Hybrid pattern (Signal Forms + ngModel) verified as acceptable when PrimeNG doesn't support formField
