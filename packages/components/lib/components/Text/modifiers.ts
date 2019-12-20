import {applyStyleModifiers} from 'styled-components-modifiers';

export type TextModifiers = 'italic' | 'bold' | 'underlined' | 'strike';

const textModifiersConfig = {
  bold: props => {
    return `
            font-weight: 700;
        `;
  },
  italic: props => {
    return `
            font-style: italic;
        `;
  },
  underlined: props => `text-decoration: underline;`,
  strike: props => {
    return `
        text-decoration: line-through;
    `;
  },
};

const textModifiers = applyStyleModifiers(textModifiersConfig);

export default textModifiers;
