import * as React from 'react';

function useBrandedChildren(
  {children}: {children: React.ReactNode},
  tag: string,
) {
  const [brandedChildren, stageBrandedChildren] = React.useState(null);

  React.useEffect(() => {
    function tagChild(child: React.ReactNode) {
      if (React.isValidElement(child)) {
        const {props} = child;
        const className = props.className || '';
        return React.cloneElement(
          child,
          {className: className.concat(' ', tag)},
          child.props.children,
        );
      }
    }
    if (children) {
      const markedChildren = React.Children.map(children, tagChild);
      stageBrandedChildren(markedChildren);
    }
  }, [children, tag]);

  return brandedChildren;
}

export default useBrandedChildren;
