'use client';

import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import './button.css';

export interface ButtonProps extends React.ComponentPropsWithoutRef<typeof BaseButton> {
  variant?: 'solid' | 'outline';
  size?: 'small' | 'medium' | 'large';
  mode?: 'primary' | 'tertiery' | 'destructive';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'solid',
    size = 'medium',
    mode = 'primary',
    className = '',
    children,
    ...props
  },
  ref
) {
  const buttonClass = `ds-button ds-button--${variant} ds-button--${size} ${className}`;
  
  return (
    <BaseButton
      ref={ref}
      className={buttonClass}
      data-mode-button={mode}
      {...props}
    >
      {children}
    </BaseButton>
  );
});

Button.displayName = 'Button';
