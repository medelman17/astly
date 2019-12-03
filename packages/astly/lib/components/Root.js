import React from 'react';
import {ThemeProvider} from '../styled';

import {createTheme} from '../../../themes/lib/themes';

function withRoot(Component) {
  class Root extends React.Component {
    render() {
      const {children, theme, ...props} = this.props;
      const {theme: passedTheme} = this.props;
      // console.log(
      //   'Transformed Theme:',
      //   JSON.stringify(createTheme(passedTheme ? passedTheme : {}), null, 2),
      // );
      return (
        <ThemeProvider theme={createTheme(passedTheme ? passedTheme : {})}>
          <Component {...props}>{children}</Component>
        </ThemeProvider>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <Root {...props} forwaredRef={ref} />;
  });
}

export default withRoot;
