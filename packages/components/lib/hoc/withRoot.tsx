import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {AstlyProvider, useAstly} from '../components/Provider/Provider';
import {createTheme} from '@astly/themes';

export function withRoot<T extends any>(Component: React.ComponentType<T>) {
  function Root(props: any) {
    const {children, theme, ...rest} = props;
    const {theme: passedTheme} = props;
    const astly = useAstly();
    const thisTheme = createTheme(
      passedTheme ? {astly, ...passedTheme} : {astly},
    );
    console.log(thisTheme);
    return (
      <ThemeProvider theme={thisTheme}>
        <Component astly={astly} {...rest}>
          {children}
        </Component>
      </ThemeProvider>
    );
  }

  return React.forwardRef((props, ref) => {
    return (
      <AstlyProvider>
        <Root {...props} forwaredRef={ref} />
      </AstlyProvider>
    );
  });
}
