import React from 'react';
import withRoot from '../../../packages/astly/lib/components/Root';

import './styles.scss';

const Frame = props => {
  console.log(props);
  return props.children;
};

export default withRoot(props => <Frame {...props} />);
