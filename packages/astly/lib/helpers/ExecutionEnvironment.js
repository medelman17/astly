export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
);

export const canUseGlobal = !!(typeof global !== 'undefined');
