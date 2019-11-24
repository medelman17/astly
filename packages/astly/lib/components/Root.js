import React from "react";
import { ThemeProvider } from "../styled";
import { StyleSheetManager } from "styled-components";

function withRoot(Component) {
  class Root extends React.Component {
    render() {
      const { children } = this.props;

      return (
        <ThemeProvider theme={{}}>
          <StyleSheetManager>
            <Component {...this.props}>{children}</Component>
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
