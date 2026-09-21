import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { lockScroll, unlockScroll } from "../utils/scrollLock";
import { POLICIES, type PolicyId } from "../constants";

/* ---------------------------------------------------------------------------
   PolicyModal — Ledgify Solutions
   src/components/PolicyModal.tsx

   One dialog, driven by a policy id. Replaces three hand-copied modals that
   had drifted apart from each other.

   What the old ones were missing
   ------------------------------
   - Escape didn't close them. Clicking the overlay was the only way out
     besides the button at the bottom of a long scroll.
   - No role="dialog", no aria-modal, no title association. A screen reader
     got an unannounced div.
   - Focus stayed behind the overlay, so tabbing walked through the footer
     underneath the dialog. Nothing returned focus to the trigger on close.
   - The scroll-lock effect in Footer.tsx checked isTermsOpen and
     isPrivacyOpen but not the refund modal — opening that one left the page
     scrolling behind it.
   - They rendered inside the footer's container, so their stacking depended
     on z-[101] beating whatever ancestors created. This portals to body.

   All handled here, once.
--------------------------------------------------------------------------- */

interface PolicyModalProps {
  policyId: PolicyId | null;
  onClose: () => void;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const PolicyModal: React.FC<PolicyModalProps> = ({ policyId, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  const policy = policyId ? POLICIES[policyId] : null;

  /* Remember what had focus, lock the page, focus the dialog. */
  useEffect(() => {
    if (!policy) return;

    restoreRef.current = document.activeElement as HTMLElement;
    lockScroll();
    closeRef.current?.focus();

    return () => {
      unlockScroll();
      restoreRef.current?.focus?.();
    };
  }, [policy]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const items = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  if (!policy || typeof document === "undefined") return null;

  const titleId = `policy-title-${policy.id}`;

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex items-end justify-center sm:items-center"
      onKeyDown={onKeyDown}
    >
      {/* Overlay. Clickable, and the dialog handles Escape, so there are two
          ways out that don't require scrolling to the bottom. */}
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col bg-white sm:max-h-[85vh] sm:rounded-2xl"
      >
        {/* Header stays put while the text scrolls, so the close control is
            always reachable. */}
        <div className="flex items-start justify-between gap-6 border-b-2 border-ink px-6 pb-5 pt-6 sm:px-9 sm:pt-8">
          <div>
            <h2
              id={titleId}
              className="text-2xl font-semibold tracking-[-0.015em] text-ink"
            >
              {policy.title}
            </h2>
            {policy.updated && (
              <p className="mt-1 text-sm text-muted">
                Last updated {policy.updated}
              </p>
            )}
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={`Close ${policy.title}`}
            className="relative -mr-2 -mt-1 h-10 w-10 shrink-0 rounded-full text-ink transition-colors duration-200 hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 block h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current"
            />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 block h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current"
            />
          </button>
        </div>

        {/* Sections, ruled the same way as the rest of the site. */}
        <div className="overflow-y-auto overscroll-contain px-6 pb-8 sm:px-9">
          {policy.sections.map((section) => (
            <section
              key={section.heading}
              className="border-b border-rule py-6 last:border-b-0"
            >
              <h3 className="text-base font-semibold text-ink">
                {section.heading}
              </h3>
              {section.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default PolicyModal;