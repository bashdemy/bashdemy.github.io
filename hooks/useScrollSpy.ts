import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_OFFSET = 100;

export function useScrollSpy(
  sectionIds: string[],
  offset = DEFAULT_OFFSET
): string | null {
  const [activeId, setActiveId] = useState<string | null>(
    sectionIds[0] || null
  );
  const isTickingRef = useRef(false);
  const idsKey = sectionIds.join(",");

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    // If at the top of the page, activate the first section
    if (window.scrollY < offset) {
      if (sectionIds.length > 0) {
        setActiveId(sectionIds[0]);
      }
      return;
    }

    // If reached the bottom of the page, activate the last section
    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 50;

    if (isAtBottom && sectionIds.length > 0) {
      setActiveId(sectionIds[sectionIds.length - 1]);
      return;
    }

    const scrollPosition = window.scrollY + offset;
    let currentActiveId: string | null = null;

    for (let i = 0; i < sectionIds.length; i++) {
      const section = document.getElementById(sectionIds[i]);
      if (!section) continue;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentActiveId = sectionIds[i];
        break;
      }
    }

    if (currentActiveId) {
      setActiveId(currentActiveId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey, offset]);

  const onScroll = useCallback(() => {
    if (isTickingRef.current) return;
    isTickingRef.current = true;
    requestAnimationFrame(() => {
      handleScroll();
      isTickingRef.current = false;
    });
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onScroll]);

  return activeId;
}
