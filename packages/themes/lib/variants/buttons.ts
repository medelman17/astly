export function getButtonVariants({}) {
  return {
    primary: {
      width: '100%',
      display: 'flex',
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      minHeight: 32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondary: {
      width: '100%',
      backgroundColor: 'white',
      display: 'flex',
      borderRadius: '16px',
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
}
