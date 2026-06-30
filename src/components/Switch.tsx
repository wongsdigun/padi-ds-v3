import * as React from 'react';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import './switch.css';

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof BaseSwitch.Root> {
  size?: 'sm' | 'md' | 'lg';
  label?: React.ReactNode;
  testId?: string;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { size = 'md', label, className = '', testId, ...props },
  ref
) {
  const containerClass = `ds-switch-container ds-switch-container--${size} ${className}`;
  
  return (
    <label className={containerClass} data-testid={testId ? `${testId}-container` : undefined}>
      <BaseSwitch.Root ref={ref} className="ds-switch" data-testid={testId} {...props}>
        <BaseSwitch.Thumb className="ds-switch-thumb" />
      </BaseSwitch.Root>
      {label && <span className="ds-switch-label" data-testid={testId ? `${testId}-label` : undefined}>{label}</span>}
    </label>
  );
});

Switch.displayName = 'Switch';
