import {applyStyleModifiers} from 'styled-components-modifiers';
import {FlexProps} from './Flex';

export type FlexModifiers =
  | 'normal'
  | 'stretch-all'
  | 'horizontal-bars'
  | 'vertical-stack';

const flexModifiersConfig = {
  'stretch-all': (props: FlexProps) => {
    return `
        & > .flex-item {
            background-color: blue;
            flex-grow: 1;
        }`;
  },
  'horizontal-bars': (props: FlexProps) => {
    return `
        justify-content: space-between; 
        flex-direction: column; 
        display: flex;

        & > .flex-item {

        }
      `;
  },
  'vertical-bars': (props: FlexProps) => {
    return `
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

        & > .flex-item {

        }
      `;
  },
  'vertical-stack': (props: FlexProps) => {
    return `
        display: flex;
        flex-direction: column;
        align-items: center;

        & > .flex-item {
            margin-bottom: 10px;
        }
      
      `;
  },
  wrap: (props: FlexProps) => `flex-wrap: wrap;`,
};

export const flexModifiers = applyStyleModifiers(flexModifiersConfig);
