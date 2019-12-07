import React from "react";

export function withProps(Component, props) {
  return React.forwardRef((newProps, ref) => (
    <Component ref={ref} {...props} {...newProps} />
  ));
}
