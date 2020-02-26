import * as React from 'react';
import {AstlyProvider} from '@astly/components';

// import './normalize.css';

const Frame = props => {
  return <AstlyProvider> {props.children} </AstlyProvider>;
};

export default Frame;
