import React from "react";
import { ThemeProvider } from "../styled";
import { StyleSheetManager } from "styled-components";
import { createTheme } from "../theme";

function withRoot(Component) {
  class Root extends React.Component {
    state = {
      theme: {}
    };

    componentDidMount() {
      const { theme: passedTheme } = this.props;
      const theme = createTheme(passedTheme ? passedTheme : {});
      this.setState(prev => ({ ...prev, theme }));
    }

    render() {
      const { children, theme, ...props } = this.props;

      return (
        <ThemeProvider theme={this.state.theme}>
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
