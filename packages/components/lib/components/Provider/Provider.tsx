import * as React from 'react';
import {isDomAvailable} from '@astly/helpers';

export const AstlyContext = React.createContext(null);

function getInitialWebContext() {
  return {isDomAvailable};
}

function getInitialNativeContext() {
  return {isDomAvailable};
}

export function getInitialAstlyContext() {
  return isDomAvailable ? getInitialWebContext() : getInitialNativeContext();
}

export function AstlyProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = React.useState(getInitialAstlyContext());

  React.useEffect(() => {
    const {isDomAvailable} = state;
  }, [state]);

  return (
    <AstlyContext.Provider value={state}>{children}</AstlyContext.Provider>
  );
}

export function useAstly() {
  let context = React.useContext(AstlyContext);
  if (context === undefined) {
    return null;
  }
  return context;
}
