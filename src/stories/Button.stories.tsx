import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect } from 'storybook/test';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['ai-generated'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    mode: {
      control: 'select',
      options: ['primary', 'tertiery', 'destructive'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    size: 'medium',
    mode: 'primary',
    disabled: false,
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /button/i });
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();
  },
};

export const CssCheck: Story = {
  args: {
    children: 'CSS Check Button',
    variant: 'solid',
    size: 'medium',
    mode: 'primary',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /css check button/i });
    // Check computed height is 44px
    await expect(getComputedStyle(button).height).toBe('44px');
    // Check background color resolves to the tosca-500 (#009EA9 -> rgb(0, 158, 169))
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(0, 158, 169)');
  },
};

export const Showroom = {
  render: () => {
    const modes = ['primary', 'tertiery', 'destructive'] as const;
    const sizes = ['large', 'medium', 'small'] as const;
    const variants = ['solid', 'outline'] as const;

    return (
      <div style={{ padding: '24px', fontFamily: 'var(--font-family-ubuntu, sans-serif)', background: 'var(--background-color-secondary, #f9fafa)', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: '8px' }}>Button component - Figma Spec (node-id: 88746:15695)</h1>
        <p style={{ color: 'var(--font-color-secondary, #686e76)', marginBottom: '32px' }}>Interactive, unstyled headless Button from @base-ui/react styled with Figma token variables.</p>

        {modes.map(mode => (
          <div key={mode} style={{ marginBottom: '48px', border: '1px solid var(--border-color-dark, #dee3ed)', borderRadius: '8px', padding: '24px', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
            <h2 style={{ textTransform: 'capitalize', borderBottom: '2px solid var(--border-color-dark, #dee3ed)', paddingBottom: '8px', marginBottom: '24px' }}>
              Mode: {mode === 'tertiery' ? 'Tertiary (tertiery)' : mode}
            </h2>

            {variants.map(variant => (
              <div key={variant} style={{ marginBottom: '24px' }}>
                <h3 style={{ textTransform: 'capitalize', color: 'var(--font-color-secondary, #686e76)', marginBottom: '16px', fontSize: '14px' }}>Type: {variant}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  {sizes.map(size => (
                    <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '11px', color: 'var(--font-color-inactive, #8c9197)', textTransform: 'capitalize' }}>{size}</span>
                      <Button variant={variant} size={size} mode={mode}>
                        {variant} {size}
                      </Button>
                    </div>
                  ))}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--font-color-inactive, #8c9197)' }}>Disabled</span>
                    <Button variant={variant} size="medium" mode={mode} disabled>
                      Disabled
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
};
