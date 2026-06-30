import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Tokens',
  tags: ['ai-generated'],
};

export default meta;

interface ColorGroupProps {
  title: string;
  colors: string[];
}

const ColorGroup = ({ title, colors }: ColorGroupProps) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{ textTransform: 'capitalize', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>{title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
        {colors.map(color => {
          const varName = `--${color}`;
          return (
            <div key={color} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ height: '80px', borderRadius: '4px', backgroundColor: `var(${varName})`, marginBottom: '8px', border: '1px solid #eee' }} />
              <div style={{ fontSize: '14px', fontWeight: 'bold', wordBreak: 'break-all' }}>{color}</div>
              <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>var({varName})</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Colors: StoryObj = {
  render: () => {
    const colors = {
      tosca: ['tosca-25', 'tosca-50', 'tosca-100', 'tosca-200', 'tosca-300', 'tosca-400', 'tosca-500', 'tosca-600', 'tosca-700', 'tosca-800', 'tosca-900'],
      'dark blue': ['dark-blue-25', 'dark-blue-50', 'dark-blue-100', 'dark-blue-200', 'dark-blue-300', 'dark-blue-400', 'dark-blue-500', 'dark-blue-600', 'dark-blue-700', 'dark-blue-800', 'dark-blue-900'],
      gray: ['gray-25', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500', 'gray-600', 'gray-700', 'gray-800', 'gray-900'],
      red: ['red-25', 'red-50', 'red-100', 'red-200', 'red-300', 'red-400', 'red-500', 'red-600', 'red-700', 'red-800', 'red-900'],
      orange: ['orange-25', 'orange-50', 'orange-100', 'orange-200', 'orange-300', 'orange-400', 'orange-500', 'orange-600', 'orange-700', 'orange-800', 'orange-900'],
      blue: ['blue-25', 'blue-50', 'blue-100', 'blue-200', 'blue-300', 'blue-400', 'blue-500', 'blue-600', 'blue-700', 'blue-800', 'blue-900'],
      green: ['green-25', 'green-50', 'green-100', 'green-200', 'green-300', 'green-400', 'green-500', 'green-600', 'green-700', 'green-800', 'green-900'],
      system: ['white', 'black'],
      'soft pastel': [
        'soft-pastel-ambrosia-ivory',
        'soft-pastel-placebo-turqoise',
        'soft-pastel-sugar-coated',
        'soft-pastel-polished-pink',
        'soft-pastel-brilliant-white',
        'soft-pastel-carte-blance',
        'soft-pastel-moon-white',
        'soft-pastel-milky-way'
      ],
      'hard pastel': [
        'hard-pastel-highlighter-pink',
        'hard-pastel-gorse-orange',
        'hard-pastel-tropical-tone',
        'hard-pastel-new-car',
        'hard-pastel-mesa-sunrise',
        'hard-pastel-feather-star',
        'hard-pastel-cool-violet',
        'hard-pastel-cape-pond'
      ],
      functional: [
        'background-color-primary',
        'background-color-secondary',
        'background-color-inactive',
        'background-color-blackout',
        'border-color-light',
        'border-color-dark',
        'font-color-primary',
        'font-color-secondary',
        'font-color-inactive',
        'font-color-placeholder'
      ]
    };

    return (
      <div style={{ padding: '24px', fontFamily: 'var(--font-family-ubuntu, sans-serif)', background: 'var(--background-color-secondary, #f9fafa)', color: 'var(--font-color-primary, #444b55)' }}>
        <h1 style={{ marginBottom: '8px' }}>Design Tokens - Colors</h1>
        <p style={{ color: 'var(--font-color-secondary, #686e76)', marginBottom: '32px' }}>Figma base colors, pastels, and functional theme colors registered as CSS custom variables.</p>
        {Object.entries(colors).map(([groupName, colorList]) => (
          <ColorGroup key={groupName} title={groupName} colors={colorList} />
        ))}
      </div>
    );
  }
};

export const Padding: StoryObj = {
  render: () => {
    const scales = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
    return (
      <div style={{ padding: '24px', fontFamily: 'var(--font-family-ubuntu, sans-serif)', background: 'var(--background-color-secondary, #f9fafa)', color: 'var(--font-color-primary, #444b55)' }}>
        <h1 style={{ marginBottom: '8px' }}>Design Tokens - Padding</h1>
        <p style={{ color: 'var(--font-color-secondary, #686e76)', marginBottom: '32px' }}>Spacing values for padding.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {scales.map(scale => (
            <div key={scale} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', background: '#fff' }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>--padding-{scale}</div>
              <div style={{ fontSize: '12px', color: '#666' }}>{scale}px</div>
              <div style={{ marginTop: '16px', background: '#e0f2f1', width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: '#009EA9', width: `calc(100% - ${scale}px)`, height: `calc(100% - ${scale}px)` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export const Margin: StoryObj = {
  render: () => {
    const scales = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
    return (
      <div style={{ padding: '24px', fontFamily: 'var(--font-family-ubuntu, sans-serif)', background: 'var(--background-color-secondary, #f9fafa)', color: 'var(--font-color-primary, #444b55)' }}>
        <h1 style={{ marginBottom: '8px' }}>Design Tokens - Margin</h1>
        <p style={{ color: 'var(--font-color-secondary, #686e76)', marginBottom: '32px' }}>Spacing values for margin.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {scales.map(scale => (
            <div key={scale} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', background: '#fff' }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>--margin-{scale}</div>
              <div style={{ fontSize: '12px', color: '#666' }}>{scale}px</div>
              <div style={{ marginTop: '16px', background: '#fce4ec', width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: '#c2185b', width: `calc(100% - ${scale}px)`, height: `calc(100% - ${scale}px)` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export const Shadow: StoryObj = {
  render: () => {
    const shadows = [
      { level: 0, value: '0px 0px 0px 2px #EEAFAF' },
      { level: 1, value: '0px 1px 0px rgba(0, 0, 0, 0.05)' },
      { level: 2, value: '0px 1px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)' },
      { level: 3, value: '0px 2px 10px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.2)' },
      { level: 4, value: '0px 4px 20px rgba(0, 0, 0, 0.15), 0px 0px 3px rgba(0, 0, 0, 0.1)' },
      { level: 5, value: '0px 8px 40px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.1)' },
    ];
    return (
      <div style={{ padding: '24px', fontFamily: 'var(--font-family-ubuntu, sans-serif)', background: 'var(--background-color-secondary, #f9fafa)', color: 'var(--font-color-primary, #444b55)' }}>
        <h1 style={{ marginBottom: '8px' }}>Design Tokens - Shadow (Elevation)</h1>
        <p style={{ color: 'var(--font-color-secondary, #686e76)', marginBottom: '32px' }}>Box shadow values for element elevation.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {shadows.map(shadow => (
            <div key={shadow.level} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '24px', background: '#fff' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '4px', background: '#9CA3AF', boxShadow: shadow.value, marginBottom: '24px' }} />
              <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>Elevation-{shadow.level}</div>
              <div style={{ fontSize: '12px', color: '#666', wordBreak: 'break-all' }}>{shadow.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export const BorderRadius: StoryObj = {
  render: () => {
    const radii = [
      { name: '1', value: '2px' },
      { name: '2', value: '4px' },
      { name: '3', value: '6px' },
      { name: '4', value: '8px' },
      { name: '5', value: '12px' },
      { name: '6', value: '16px' },
      { name: '7', value: '24px' },
      { name: '8', value: '9999px' },
    ];
    return (
      <div style={{ padding: '24px', fontFamily: 'var(--font-family-ubuntu, sans-serif)', background: 'var(--background-color-secondary, #f9fafa)', color: 'var(--font-color-primary, #444b55)' }}>
        <h1 style={{ marginBottom: '8px' }}>Design Tokens - Border Radius</h1>
        <p style={{ color: 'var(--font-color-secondary, #686e76)', marginBottom: '32px' }}>Corner rounding values for elements.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {radii.map(radius => (
            <div key={radius.name} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: '#009EA9', borderRadius: radius.value, marginBottom: '16px' }} />
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Radius {radius.name}</div>
              <div style={{ fontSize: '12px', color: '#666' }}>{radius.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
