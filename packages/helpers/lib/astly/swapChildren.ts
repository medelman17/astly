function swapChildren(map) {
  const keys = Object.keys(map);
  return function check(element) {
    if (element && element.props && element.props.children) {
      if (keys.includes(element.props.id)) {
        return {
          ...element,
          props: {
            ...element.props,
            children: [map[element.props.id]],
          },
        };
      } else {
        return {
          ...element,
          props: {
            ...element.props,
            children: element.props.children.map(check),
          },
        };
      }
    }

    return element;
  };
}

export default swapChildren;
