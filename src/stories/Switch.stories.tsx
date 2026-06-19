import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    defaultChecked: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Text Option',
    size: 'lg',
    defaultChecked: false,
    disabled: false,
  },
};

export const Showroom = {
  render: () => {
    const sizes = ['lg', 'md', 'sm'] as const;

    return (
      <div style={{ padding: '24px', fontFamily: 'var(--font-family-ubuntu, sans-serif)', background: '#fff', minHeight: '100vh' }}>
        <h1 style={{ marginBottom: '8px' }}>Switch Component</h1>
        <p style={{ color: '#686e76', marginBottom: '32px' }}>Interactive Switch built with Base UI and Figma specifications.</p>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '48px' }}>

          <div style={{ border: '1px solid #dee3ed', borderRadius: '8px', padding: '24px', background: '#fff' }}>
            <h2 style={{ borderBottom: '2px solid #dee3ed', paddingBottom: '8px', marginBottom: '24px' }}>
              Active (Checked) vs Inactive
            </h2>
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontSize: '14px', color: '#686e76' }}>Inactive (Unchecked)</h3>
                {sizes.map(size => (
                  <Switch key={size} size={size} label="Text Option" />
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontSize: '14px', color: '#686e76' }}>Active (Checked)</h3>
                {sizes.map(size => (
                  <Switch key={size} size={size} label="Text Option" defaultChecked />
                ))}
              </div>
            </div>
          </div>

          <div style={{ border: '1px solid #dee3ed', borderRadius: '8px', padding: '24px', background: '#fff' }}>
            <h2 style={{ borderBottom: '2px solid #dee3ed', paddingBottom: '8px', marginBottom: '24px' }}>
              Disabled State
            </h2>
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontSize: '14px', color: '#686e76' }}>Disabled Inactive</h3>
                {sizes.map(size => (
                  <Switch key={size} size={size} label="Text Option" disabled />
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontSize: '14px', color: '#686e76' }}>Disabled Active</h3>
                {sizes.map(size => (
                  <Switch key={size} size={size} label="Text Option" disabled defaultChecked />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
};
