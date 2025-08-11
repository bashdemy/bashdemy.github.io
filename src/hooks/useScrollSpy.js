import { useEffect, useCallback, useState } from 'react';

const DEFAULT_OFFSET = 100;

export function useScrollSpy(sectionIds, offset = DEFAULT_OFFSET) {
  const [activeId, setActiveId] = useState(sectionIds[0] || null);

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return activeId;
}
