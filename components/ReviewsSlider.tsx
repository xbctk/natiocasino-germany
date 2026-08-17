"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Review = {
  country?: string;
  name?: string;
  review: string;
  score?: string;
  title?: string;
};

export function ReviewsSlider({ reviews }: { reviews: readonly Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateControls = useCallback(() => {
    const track = trackRef.current;

    if (!track) return;

    const endPosition = track.scrollWidth - track.clientWidth;
    setCanScrollBack(track.scrollLeft > 2);
    setCanScrollForward(track.scrollLeft < endPosition - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(track);
    track.addEventListener("scroll", updateControls, { passive: true });
    updateControls();

    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", updateControls);
    };
  }, [updateControls]);

  const moveSlider = (direction: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(".review-card");

    if (!track || !card) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    track.scrollBy({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      left: direction * (card.getBoundingClientRect().width + gap),
    });
  };

  return (
    <div className="reviews-slider">
      <button
        aria-label="Vorherige Bewertungen"
        className="reviews-slider__control reviews-slider__control--previous"
        disabled={!canScrollBack}
        onClick={() => moveSlider(-1)}
        type="button"
      >
        <span aria-hidden="true">←</span>
      </button>
      <div
        aria-label="Spielerbewertungen"
        className="reviews-grid"
        ref={trackRef}
        role="region"
        tabIndex={0}
      >
        {reviews.map(({ country, name, review, score, title }) => {
          const hasMetadata = Boolean(country || name || score || title);
          const isStructuredEditorialReview = Boolean(title);

          return (
            <article className={`review-card${isStructuredEditorialReview ? " germany-review-card germany-review-card--structured" : hasMetadata ? "" : " germany-review-card"}`} key={name ?? review}>
              {hasMetadata ? (
                <div className="review-card__top">
                  <div className="review-card__identity">
                    <h3>{title ?? name}</h3>
                    {(title ? name : country) && <p>{title ? name : country}</p>}
                  </div>
                  {score && <strong className="review-card__score">{score}</strong>}
                </div>
              ) : null}
              <blockquote>{review}</blockquote>
            </article>
          );
        })}
      </div>
      <button
        aria-label="Nächste Bewertungen"
        className="reviews-slider__control reviews-slider__control--next"
        disabled={!canScrollForward}
        onClick={() => moveSlider(1)}
        type="button"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
