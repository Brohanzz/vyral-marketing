"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/lib/testimonials";
import TestimonialCard from "./TestimonialCard";

/**
 * Testimonial slider: two cards from 860px, one below, one card at a time, looping.
 *
 * Every card is in the server HTML, once. The cards sit in a row inside a clipped
 * viewport. To move, the row slides by one card, then the card that left is moved to
 * the other end of the list and the row snaps back, so the loop needs no copies.
 * Cards outside the visible window are aria-hidden and inert.
 *
 * Auto-advance every 7 seconds. It stops on hover, on focus inside the slider, while
 * the tab is hidden and after the pause button is pressed. With prefers-reduced-motion
 * there is no auto-advance and no slide animation.
 */

const INTERVAL_MS = 7000;
const SLIDE_MS = 500;
const SWIPE_PX = 40;

type Track = { shift: boolean; animate: boolean };

function useMedia(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return matches;
}

const button =
  "inline-flex size-11 flex-none cursor-pointer items-center justify-center rounded-full bg-surface text-ink shadow-1 transition-colors hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus motion-reduce:transition-none";

function Icon({ d }: { d: string }) {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const count = items.length;
  const wide = useMedia("(min-width: 860px)");
  const reduced = useMedia("(prefers-reduced-motion: reduce)");
  const perView = wide ? 2 : 1;

  // order[0] is the first visible card; the list is rotated as the slider moves.
  const [order, setOrder] = useState(() => items.map((_, i) => i));
  const [track, setTrack] = useState<Track>({ shift: false, animate: false });
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [tick, setTick] = useState(0);
  const busy = useRef(false);
  const timers = useRef<number[]>([]);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    const pending = timers.current;
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      pending.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  const next = useCallback(() => {
    if (busy.current) return;
    setTick((t) => t + 1);
    if (reduced) {
      setOrder((o) => [...o.slice(1), o[0]]);
      return;
    }
    busy.current = true;
    setTrack({ shift: true, animate: true });
    later(() => {
      setOrder((o) => [...o.slice(1), o[0]]);
      setTrack({ shift: false, animate: false });
      busy.current = false;
    }, SLIDE_MS);
  }, [reduced]);

  const prev = useCallback(() => {
    if (busy.current) return;
    setTick((t) => t + 1);
    if (reduced) {
      setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
      return;
    }
    busy.current = true;
    // Put the last card in front with the row already shifted, then slide it in.
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
    setTrack({ shift: true, animate: false });
    later(() => setTrack({ shift: false, animate: true }), 40);
    later(() => {
      setTrack({ shift: false, animate: false });
      busy.current = false;
    }, 40 + SLIDE_MS);
  }, [reduced]);

  const goTo = (target: number) => {
    const at = order.indexOf(target);
    if (at === 0) return;
    if (at === 1) return next();
    if (at === order.length - 1) return prev();
    setTick((t) => t + 1);
    setOrder((o) => [...o.slice(at), ...o.slice(0, at)]);
  };

  const playing = !userPaused && !reduced;
  const running = playing && !hovered && !focused && !tabHidden;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(next, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [running, next, tick]);

  const current = order[0];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="What people say about VYRAL"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(e) => {
        // Pause for keyboard focus only; a mouse click on an arrow should not hold the slider.
        if (e.target.matches(":focus-visible")) setFocused(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <div
        className="-mx-3.5 overflow-hidden pb-9 [touch-action:pan-y]"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (dx <= -SWIPE_PX) next();
          if (dx >= SWIPE_PX) prev();
        }}
      >
        <div
          aria-live={playing ? "off" : "polite"}
          className={`flex w-full ${track.animate ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ transform: track.shift ? `translateX(-${100 / perView}%)` : "translateX(0)" }}
        >
          {order.map((index, position) => {
            const visible = position < perView;
            return (
              <div
                key={items[index].name}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                aria-hidden={visible ? undefined : true}
                inert={!visible}
                className="flex w-full flex-none px-3.5 desk:w-1/2"
              >
                <TestimonialCard t={items[index]} className="w-full" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {!reduced && (
          <button
            type="button"
            className={button}
            aria-label={userPaused ? "Start automatic sliding" : "Pause automatic sliding"}
            onClick={() => setUserPaused((p) => !p)}
          >
            {userPaused ? <Icon d="M8 5v14l11-7z" /> : <Icon d="M9 5v14M15 5v14" />}
          </button>
        )}
        <button type="button" className={button} aria-label="Previous testimonial" onClick={prev}>
          <Icon d="M15 18l-6-6 6-6" />
        </button>
        <div className="flex items-center">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial ${i + 1} of ${count}`}
              aria-current={i === current ? "true" : undefined}
              onClick={() => goTo(i)}
              className="group inline-flex size-11 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <span
                aria-hidden="true"
                className={`block rounded-full transition-all motion-reduce:transition-none ${
                  i === current ? "size-3 bg-primary-strong" : "size-2.5 bg-hairline-strong group-hover:bg-muted"
                }`}
              />
            </button>
          ))}
        </div>
        <button type="button" className={button} aria-label="Next testimonial" onClick={next}>
          <Icon d="M9 18l6-6-6-6" />
        </button>
      </div>
    </div>
  );
}
