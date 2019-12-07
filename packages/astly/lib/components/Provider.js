import React from 'react';
import {canUseDOM} from '../helpers';

export const AstlyContext = React.createContext();

function getInitialAstlyContext() {
  return {isWeb: canUseDOM};
}

function AstlyProvider({children, ...props}) {
  const [state, setState] = React.useState(getInitialAstlyContext());

  React.useEffect(() => {
    const {isWeb} = state;
  }, [state]);

  return (
    <AstlyContext.Provider value={state}>{children}</AstlyContext.Provider>
  );
}

function useAstly() {
  let context = React.useContext(AstlyContext);
  if (context === undefined) {
    return null;
  }
  return context;
}

export {AstlyProvider, useAstly};
