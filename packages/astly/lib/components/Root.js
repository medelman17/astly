import React from "react";
import { ThemeProvider } from "../styled";
import { StyleSheetManager } from "styled-components";
import { createTheme } from "../../../themes/lib";

function withRoot(Component) {
  class Root extends React.Component {
    render() {
      const { children, theme, ...props } = this.props;
      const { theme: passedTheme } = this.props;
      return (
        <ThemeProvider theme={createTheme(passedTheme ? passedTheme : {})}>
          <StyleSheetManager>
            <Component {...props}>{children}</Component>
          </StyleSheetManager>
        </ThemeProvider>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <Root {...props} forwaredRef={ref} />;
  });
}

export default withRoot;
