import {applyStyleModifiers} from 'styled-components-modifiers';
import {TextProps} from './Text';

export type TextModifiers = 'italic' | 'bold' | 'underlined' | 'strike';

const textModifiersConfig = {
  bold: (props: TextProps) => {
    return `
            font-weight: 700;
        `;
  },
  italic: (props: TextProps) => {
    return `
            font-style: italic;
        `;
  },
  underlined: (props: TextProps) => `text-decoration: underline;`,
  strike: (props: TextProps) => {
    return `
        text-decoration: line-through;
    `;
  },
};

const textModifiers = applyStyleModifiers(textModifiersConfig);

export default textModifiers;
