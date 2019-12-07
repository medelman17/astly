const space = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48];
const fontSizes = [11, 12, 13, 15, 16, 17, 20, 22, 34];

const colors = {
  blue: '#040575',
  secondary: '#040575',
  primary: '#f8971d',
  orange: '#f8971d',
};

const fonts = {
  body: 'Montserrat',
  heading: 'Montserrat',
};

const buttons = {
  primary: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#003057',
    border: 'none',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  secondary: {
    width: '100%',
    display: 'flex',
    backgroundColor: 'white',
    border: 'solid 1px #9b9b9b',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  tertiary: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#1a1a1a',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  cautionary: {
    width: '100%',
    display: 'flex',
    backgroundColor: 'white',
    border: 'solid 1px #c8102e',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
};

export const two = {
  colors,
  fonts,
  buttons,
  space,
  fontSizes,
};
