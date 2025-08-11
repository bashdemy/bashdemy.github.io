import { renderHook, act } from '@testing-library/react';
import { useScrollSpy } from '../useScrollSpy';

function createSection(id, top, height) {
  const el = document.createElement('div');
  el.id = id;
  Object.defineProperty(el, 'offsetTop', { value: top });
  Object.defineProperty(el, 'offsetHeight', { value: height });
  document.body.appendChild(el);
}

it('sets active section based on scroll position', () => {
  createSection('about', 0, 500);
  createSection('apps', 500, 500);
  createSection('blog', 1000, 500);

  const { result } = renderHook(() =>
    useScrollSpy(['about', 'apps', 'blog'], 100)
  );

  act(() => {
    Object.defineProperty(window, 'scrollY', { value: 550, writable: true });
    window.dispatchEvent(new Event('scroll'));
  });

  expect(result.current).toBe('apps');
});
