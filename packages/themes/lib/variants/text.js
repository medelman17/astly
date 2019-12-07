export function getTextVariants(props) {
  const {fontSizes, space, fonts} = props;

  const fontSizesLength = fontSizes.length;

  return {
    h1: {
      fontFamily: 'heading',
      fontSize: fontSizes[fontSizesLength - 1],
      lineHeight: `${fontSizes[fontSizesLength - 1] + 7}px`,
      letterSpacing: 0.381836,
      fontWeight: '400',
    },
    h2: {
      fontFamily: 'heading',
      fontSize: fontSizes[fontSizesLength - 2],
      lineHeight: `${fontSizes[fontSizesLength - 2] + 6}px`,
      letterSpacing: 0.355469,

      fontWeight: '400',
    },
    h3: {
      fontFamily: 'heading',
      fontSize: fontSizes[fontSizesLength - 3],
      lineHeight: `${fontSizes[fontSizesLength - 3] + 6}px`,
      letterSpacing: 0.34375,
      fontWeight: '400',
    },
    h4: {
      fontFamily: 'heading',
      fontSize: fontSizes[fontSizesLength - 4],
      lineHeight: `${fontSizes[fontSizesLength - 4] + 5}px`,
      letterSpacing: 0.361328,
      fontWeight: '400',
    },
    h5: {
      fontFamily: 'heading',
      fontSize: fontSizes[fontSizesLength - 5],
      lineHeight: `${fontSizes[fontSizesLength - 5] + 5}px`,
      letterSpacing: -0.408,

      fontWeight: '500',
    },
    h6: {
      fontFamily: 'heading',
      fontSize: fontSizes[fontSizesLength - 6],
      lineHeight: `${fontSizes[fontSizesLength - 6] + 5}px`,
      letterSpacing: -0.408,
      fontFamily: 'System',
      fontWeight: '400',
    },
    body: {
      fontFamily: 'body',
      fontSize: fontSizes[fontSizesLength - 6],
      lineHeight: `${fontSizes[fontSizesLength - 6] + 5}px`,
      letterSpacing: -0.408,
      fontWeight: '400',
    },
    superscript: {
      fontSize:
        fontSizes[fontSizesLength - 6] - fontSizes[fontSizesLength - 6] * 0.66,
      lineHeight: `${fontSizes[fontSizesLength - 6] - 6}px`,
      letterSpacing: -0.408,
      fontWeight: '400',
    },
    subscript: {
      fontSize:
        fontSizes[fontSizesLength - 6] - fontSizes[fontSizesLength - 6] * 0.66,
      lineHeight: `${fontSizes[fontSizesLength - 6] + 12}px`,
      letterSpacing: -0.408,
      fontWeight: '400',
    },
  };
}

function getNativeDefaults() {}

function getWebDefaults() {}
