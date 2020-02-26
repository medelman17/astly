import React from 'react';

/*#if _NATIVE
import {Dimensions, AccessibilityInfo, PixelRatio, StyleSheet, Platform, NativeModules} from 'react-native'
import {ThemeProvider} from 'styled-components/native'
const {PlatformConstants} = NativeModules

const isNative = true; 

//#else */
import {ThemeProvider} from 'styled-components';
const isNative = false;
//#endif

import {createTheme} from '@astly/themes';

export const AstlyContext = React.createContext(null);

/*#if _NATIVE


async function getInitialContext() {
  const {width, height} = Dimensions.get('window')
  const pixelRatio = PixelRatio.get()
  const fontScale = PixelRatio.getFontScale()

  console.log(NativeModules)

  const platform = Platform.OS === 'ios' ? 'ios' : 'android'

  console.log('pxr', fontScale)
  const isScreenReaderEnabled = await AccessibilityInfo.isScreenReaderEnabled()

  const accessibility = {
    isScreenReaderEnabled
  }

  const native = {
    hairlineWidth: StyleSheet.hairlineWidth,
    platform,
    platformVersion: Platform.Version
  }

 

  const screen = {
    width, 
    height,
    pixelRatio,
    fontScale, 
    widthInPixels: PixelRatio.roundToNearestPixel(width),
    heightInPixels: PixelRatio.roundToNearestPixel(height)
    
  }
  return {isNative, native, screen, accessibility};
}
//#else */
function getInitialContext() {
  const {
    screen: {colorDepth, pixelDepth, orientation},
    document,
    origin,
    outerWidth,
    outerHeight,
    devicePixelRatio,
    innerHeight,
    innerWidth,
    location,
  } = window;

  const accessibility = {
    isScreenReaderEnabled: false,
  };

  const web = {
    location,
    document,
    window,
  };

  const screen = {
    width: innerWidth,
    height: innerHeight,
    pixelRatio: devicePixelRatio,
    colorDepth,
    pixelDepth,
    orientation,
  };
  return {isNative, web, screen, accessibility};
}
//#endif

export async function getInitialAstlyContext() {
  const ctx = await getInitialContext();
  return ctx;
}

export function AstlyProvider({
  children,
  theme,
  ...props
}: {
  theme?: any;
  children: React.ReactNode;
}) {
  const [state, setState] = React.useState({theme: {}});

  React.useEffect(() => {
    getInitialAstlyContext().then(state => {
      const thisTheme = createTheme(theme, state);

      setState({...state, theme: thisTheme});
    });
  }, []);

  console.log(state);

  return (
    <AstlyContext.Provider value={state}>
      <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
    </AstlyContext.Provider>
  );
}

export function useAstly() {
  let context = React.useContext(AstlyContext);
  if (context === undefined) {
    return null;
  }
  return context;
}
