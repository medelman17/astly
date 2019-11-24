import * as React from "react";
import { isNative } from "../helpers";

export default class Script extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const { children, ...props } = this.props;
    const newScript = Object.assign(document.createElement("script"), props, {
      textContent: children
    });
    this.ref.current.replaceWith(newScript);
  }

  render() {
    return <script ref={this.ref} />;
  }
}
