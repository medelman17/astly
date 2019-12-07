import React from 'react';
import {ThemeProvider} from 'styled-components';
import {AstlyProvider, useAstly} from './Provider';

import {createTheme} from '@fabulas/themes';

function withRoot(Component) {
  function Root(props) {
    const {children, theme, ...rest} = props;
    const {theme: passedTheme} = props;
    const astly = useAstly();
    const thisTheme = createTheme(
      passedTheme ? {astly, ...passedTheme} : {astly},
    );
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

export default withRoot;
