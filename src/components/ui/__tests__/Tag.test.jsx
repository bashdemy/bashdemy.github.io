import { render, screen } from '@testing-library/react';
import Tag from '../Tag';

it('renders children', () => {
  render(<Tag>React</Tag>);
  expect(screen.getByText('React')).toBeInTheDocument();
});

it('applies solid variant classes', () => {
  render(
    <Tag tone="primary" variant="solid">
      Solid
    </Tag>
  );
  const el = screen.getByText('Solid');
  expect(el.className).toMatch(/bg-theme-primary/);
});
