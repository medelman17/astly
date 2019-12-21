import * as React from 'react';
import {withRoot} from '@astly/components';

const Frame = (props: any) => {
  console.log(props);
  return props.children;
};

export default withRoot(Frame);
