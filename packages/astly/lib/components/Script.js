import React, {Component, createRef} from 'react';
import {isNative} from '../helpers';

class Script extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
    const {children, ...props} = this.props;
    if (isNative === true) {
      return;
    }
    const newScript = Object.assign(document.createElement('script'), props, {
      textContent: children,
    });
    this.ref.current.replaceWith(newScript);
  }

  render() {
    return isNative === true ? null : <script ref={this.ref} />;
  }
}

export default Script;
