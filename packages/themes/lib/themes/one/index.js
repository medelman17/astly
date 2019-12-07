const space = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48];
const fontSizes = [11, 12, 13, 15, 16, 17, 20, 22, 34];

const colors = {
  blue: '#4B9FDD',
  secondary: '#F7971F',
  primary: '#4B9FDD',
  orange: '#F7971F',
};

const fonts = {
  body: 'Nunito',
  heading: 'Nunito',
};

const buttons = {
  primary: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#f8971d',
    borderRadius: '16px',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  secondary: {
    width: '100%',
    display: 'flex',
    borderRadius: '16px',
    border: 'solid 1px #9b9b9b',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  tertiary: {
    width: '100%',
    display: 'flex',
    borderRadius: '16px',
    backgroundColor: '#1a1a1a',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  cautionary: {
    width: '100%',
    display: 'flex',
    borderRadius: '16px',
    border: 'solid 1px #c8102e;',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
};

export const one = {
  colors,
  fonts,
  buttons,
  space,
  fontSizes,
};
