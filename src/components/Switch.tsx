import * as React from 'react';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import './switch.css';

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof BaseSwitch.Root> {
  size?: 'sm' | 'md' | 'lg';
  label?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { size = 'md', label, className = '', ...props },
  ref
) {
  const containerClass = `ds-switch-container ds-switch-container--${size} ${className}`;
  
  return (
    <label className={containerClass}>
      <BaseSwitch.Root ref={ref} className="ds-switch" {...props}>
        <BaseSwitch.Thumb className="ds-switch-thumb" />
      </BaseSwitch.Root>
      {label && <span className="ds-switch-label">{label}</span>}
    </label>
  );
});

Switch.displayName = 'Switch';
