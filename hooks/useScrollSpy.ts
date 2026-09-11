import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_OFFSET = 100;

export function useScrollSpy(
  sectionIds: string[],
  offset = DEFAULT_OFFSET
): string | null {
  const [activeId, setActiveId] = useState(sectionIds[0] || null);
  const isTickingRef = useRef(false);

  const handleScroll = useCallback(() => {
    const sections = sectionIds.map(id => document.getElementById(id));
    const scrollPosition = window.scrollY + offset;

    sections.forEach((section, index) => {
      if (!section) return;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveId(sectionIds[index]);
      }
    });
  }, [sectionIds, offset]);

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
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return activeId;
}
