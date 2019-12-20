import {applyStyleModifiers} from 'styled-components-modifiers';

export type FlexModifiers =
  | 'normal'
  | 'stretch-all'
  | 'horizontal-bars'
  | 'vertical-stack';

const flexModifiersConfig = {
  'stretch-all': props => {
    return `
        & > .flex-item {
            background-color: blue;
            flex-grow: 1;
        }`;
  },
  'horizontal-bars': props => {
    return `
        justify-content: space-between; 
        flex-direction: column; 
        display: flex;

        & > .flex-item {

        }
      `;
  },
  'vertical-bars': props => {
    return `
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

        & > .flex-item {

        }
      `;
  },
  'vertical-stack': props => {
    return `
        display: flex;
        flex-direction: column;
        align-items: center;

        & > .flex-item {
            margin-bottom: 10px;
        }
      
      `;
  },
  wrap: props => `flex-wrap: wrap;`,
};

export const flexModifiers = applyStyleModifiers(flexModifiersConfig);
