import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  tone?: 'accent' | 'primary' | 'muted' | 'success' | 'info';
  variant?: 'soft' | 'solid';
  className?: string;
}

function Tag({ children, tone = 'accent', variant = 'soft', className = '' }: TagProps) {
  const softToneClasses = {
    accent: 'bg-theme-accent/20 text-theme-accent',
    primary: 'bg-theme-primary/10 text-theme-primary',
    muted: 'bg-theme-secondary/10 text-theme-secondary',
    success: 'bg-green-500/20 text-green-600',
    info: 'bg-blue-500/20 text-blue-600',
  };

  const solidToneClasses = {
    accent: 'bg-theme-accent text-white',
    primary: 'bg-theme-primary text-white',
    muted: 'bg-theme-secondary text-white',
    success: 'bg-green-600 text-white',
    info: 'bg-blue-600 text-white',
  };

  const base = 'px-2 py-1 rounded text-xs font-medium font-mono tech-label';
  const toneClass =
    variant === 'solid'
      ? solidToneClasses[tone] || solidToneClasses.accent
      : softToneClasses[tone] || softToneClasses.accent;

  const classes = [base, toneClass, className].filter(Boolean).join(' ');

  return <span className={classes}>{children}</span>;
}

export default Tag;
