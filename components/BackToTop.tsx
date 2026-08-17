"use client";

import { useEffect, useState } from "react";

const VISIBILITY_OFFSET = 360;

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    const updateVisibility = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        setIsVisible(window.scrollY > VISIBILITY_OFFSET);
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const returnToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  const scrollToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    returnToTop();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    event.currentTarget.blur();
    returnToTop();
  };

  return (
    <button
      aria-hidden={!isVisible}
      aria-label="Back to top"
      className={`back-to-top${isVisible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      tabIndex={isVisible ? 0 : -1}
      type="button"
    >
      <span aria-hidden="true" />
    </button>
  );
}
