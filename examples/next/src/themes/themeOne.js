const colors = {
  orange: '#f8971d',
  blue: '#040575',
  primary: '#f8971d',
  secondary: '#040575',
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
    color: 'white',
  },
  secondary: {
    width: '100%',
    display: 'flex',
    borderRadius: '25px',
    border: 'solid 1px #9b9b9b',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tertiary: {
    width: '100%',
    display: 'flex',
    borderRadius: '16px',
    backgroundColor: '#1a1a1a',
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cautionary: {
    width: '100%',
    display: 'flex',
    borderRadius: '16px',
    border: 'solid 1px #c8102e;',
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
