import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Overlay blur scrim: blur page content whenever an overlay is present (Glassmorphism only)
(() => {
  const isGlass = () => document.documentElement.getAttribute('data-theme')?.startsWith('glassmorphism-');
  const selectors = [
  // Only flatpickr calendar overlay
  '.flatpickr-calendar.open'
  ];

  const getActiveOverlays = () => {
    for (const sel of selectors) {
      const nodes = document.querySelectorAll(sel);
      for (const el of Array.from(nodes)) {
        // visible check
        const style = window.getComputedStyle(el as Element);
        if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
          if ((el as HTMLElement).offsetParent !== null || style.position === 'fixed') {
            return true;
          }
        }
      }
    }
    return false;
  };

  const ensureScrim = (active: boolean) => {
    const id = 'overlay-blur-scrim';
    const existing = document.getElementById(id);
    if (active && isGlass()) {
      if (!existing) {
        const scrim = document.createElement('div');
        scrim.id = id;
        document.body.appendChild(scrim);
      }
    } else if (existing) {
      existing.remove();
    }
  };

  const evaluate = () => ensureScrim(getActiveOverlays());
  const observer = new MutationObserver(() => evaluate());
  observer.observe(document.body, { childList: true, subtree: true, attributes: true });
  window.addEventListener('scroll', evaluate, true);
  window.addEventListener('resize', evaluate);
  document.addEventListener('visibilitychange', evaluate);
  setInterval(evaluate, 500); // small fallback
})();
