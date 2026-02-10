let lockCount = 0;
const originalOverflow = typeof document !== 'undefined' ? document?.body?.style?.overflow : undefined;

export function lockScroll() {
  try {
    lockCount++;
    if (typeof document === 'undefined') return;
    if (lockCount === 1) {
      // store previous
      (document.body as HTMLBodyElement).style.overflow = 'hidden';
      (document.documentElement as HTMLElement).style.overflow = 'hidden';
      (document.body as any).style.touchAction = 'none';
    }
  } catch (e) {
    // no-op
  }
}

export function unlockScroll(force = false) {
  try {
    if (typeof document === 'undefined') return;
    if (force) {
      lockCount = 0;
    } else {
      lockCount = Math.max(0, lockCount - 1);
    }
    if (lockCount === 0) {
      (document.body as HTMLBodyElement).style.overflow = originalOverflow || '';
      (document.documentElement as HTMLElement).style.overflow = '';
      (document.body as any).style.touchAction = '';
    }
  } catch (e) {
    // no-op
  }
}
