const colors = {
  orange: '#f8971d',
  blue: '#4B9FDD',
  primary: '#4B9FDD',
  secondary: '#f8971d',
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
  },
  secondary: {
    width: '100%',
    display: 'flex',

    backgroundColor: 'white',
    border: 'solid 1px #9b9b9b',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tertiary: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#1a1a1a',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cautionary: {
    width: '100%',
    display: 'flex',
    backgroundColor: 'white',
    border: 'solid 1px #c8102e',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default {
  colors,
  fonts,
  buttons,
};
