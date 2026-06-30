import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Typography',
  tags: ['ai-generated'],
};

export default meta;

interface TypographyRowProps {
  styleName: string;
  className: string;
  sampleText?: string;
}

const TypographyRow = ({ styleName, className, sampleText = 'The quick brown fox jumps over the lazy dog' }: TypographyRowProps) => {
  return (
    <tr style={{ borderBottom: '1px solid #eee' }}>
      <td style={{ padding: '12px', fontWeight: 'bold', fontSize: '14px', color: '#333', verticalAlign: 'middle' }}>
        <div>{styleName}</div>
        <code style={{ fontSize: '11px', color: '#666', background: '#f5f5f5', padding: '2px 4px', borderRadius: '4px', marginTop: '4px', display: 'inline-block' }}>
          .{className}
        </code>
      </td>
      <td style={{ padding: '12px', verticalAlign: 'middle' }}>
        <span className={className}>{sampleText}</span>
      </td>
    </tr>
  );
};

export const TextStyles: StoryObj = {
  render: () => {
    const groups: {
      name: string;
      styles: { name: string; class: string; sample?: string; }[];
    }[] = [
      {
        name: 'Headings',
        styles: [
          { name: 'Heading 1', class: 'heading-1', sample: 'Heading 1 (text-6xl, leading-6xl)' },
          { name: 'Heading 2', class: 'heading-2', sample: 'Heading 2 (text-5xl, leading-5xl)' },
          { name: 'Heading 3', class: 'heading-3', sample: 'Heading 3 (text-4xl, leading-4xl)' },
          { name: 'Heading 4', class: 'heading-4', sample: 'Heading 4 (text-3xl, leading-3xl)' },
          { name: 'Heading 5', class: 'heading-5', sample: 'Heading 5 (text-2xl, leading-2xl)' },
          { name: 'Heading 6', class: 'heading-6', sample: 'Heading 6 (text-xl, leading-xl Title Case)' },
        ]
      },
      {
        name: 'Body / Large',
        styles: [
          { name: 'Body Large Regular', class: 'body-large-regular' },
          { name: 'Body Large Semibold', class: 'body-large-semibold' },
          { name: 'Body Large Bold', class: 'body-large-bold' },
          { name: 'Body Large Italic', class: 'body-large-italic' },
          { name: 'Body Large Underline', class: 'body-large-underline' },
          { name: 'Body Large Underline Semibold', class: 'body-large-underline-semibold' },
          { name: 'Body Large Underline Bold', class: 'body-large-underline-bold' },
        ]
      },
      {
        name: 'Body / Small',
        styles: [
          { name: 'Body Small Regular', class: 'body-small-regular' },
          { name: 'Body Small Semibold', class: 'body-small-semibold' },
          { name: 'Body Small Bold', class: 'body-small-bold' },
          { name: 'Body Small Italic', class: 'body-small-italic' },
          { name: 'Body Small Underline', class: 'body-small-underline' },
          { name: 'Body Small Underline Semibold', class: 'body-small-underline-semibold' },
          { name: 'Body Small Underline Bold', class: 'body-small-underline-bold' },
        ]
      },
      {
        name: 'Captions / Large',
        styles: [
          { name: 'Caption Large Regular', class: 'caption-large-regular' },
          { name: 'Caption Large Semibold', class: 'caption-large-semibold' },
          { name: 'Caption Large Bold', class: 'caption-large-bold' },
          { name: 'Caption Large Italic', class: 'caption-large-italic' },
          { name: 'Caption Large Underline', class: 'caption-large-underline' },
          { name: 'Caption Large Underline Semibold', class: 'caption-large-underline-semibold' },
          { name: 'Caption Large Underline Bold', class: 'caption-large-underline-bold' },
        ]
      },
      {
        name: 'Captions / Small',
        styles: [
          { name: 'Caption Small Regular', class: 'caption-small-regular' },
          { name: 'Caption Small Semibold', class: 'caption-small-semibold' },
          { name: 'Caption Small Bold', class: 'caption-small-bold' },
          { name: 'Caption Small Italic', class: 'caption-small-italic' },
          { name: 'Caption Small Underline', class: 'caption-small-underline' },
          { name: 'Caption Small Underline Semibold', class: 'caption-small-underline-semibold' },
          { name: 'Caption Small Underline Bold', class: 'caption-small-underline-bold' },
        ]
      },
      {
        name: 'Button Typography',
        styles: [
          { name: 'Button Large', class: 'button-large', sample: 'Button Large Text' },
          { name: 'Button Medium', class: 'button-medium', sample: 'Button Medium Text' },
          { name: 'Button Small', class: 'button-small', sample: 'Button Small Text' },
        ]
      }
    ];

    return (
      <div style={{ padding: '24px', fontFamily: 'var(--font-family-ubuntu, sans-serif)', background: 'var(--background-color-secondary, #f9fafa)', color: 'var(--font-color-primary, #444b55)' }}>
        <h1 style={{ marginBottom: '8px' }}>Design Tokens - Typography</h1>
        <p style={{ color: 'var(--font-color-secondary, #686e76)', marginBottom: '32px' }}>Figma text styles registeerror as global CSS utility classes.</p>
        
        {groups.map(group => (
          <div key={group.name} style={{ marginBottom: '40px' }}>
            <h2 style={{ borderBottom: '2px solid var(--border-color-dark, #dee3ed)', paddingBottom: '8px', marginBottom: '16px' }}>{group.name}</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <thead>
                <tr style={{ background: '#f5f5f5', textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                  <th style={{ padding: '12px', width: '250px' }}>Style Class</th>
                  <th style={{ padding: '12px' }}>Preview</th>
                </tr>
              </thead>
              <tbody>
                {group.styles.map(style => (
                  <TypographyRow key={style.class} styleName={style.name} className={style.class} sampleText={style.sample} />
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  }
};
