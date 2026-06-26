import * as React from 'react';

type Ref<T> = React.Ref<T> | undefined;

function fillRef<T>(ref: Ref<T>, node: T) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (typeof ref === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}

function composeRef<T>(...refs: Ref<T>[]) {
  const refList = refs.filter(Boolean);

  if (refList.length <= 1) {
    return refList[0];
  }

  return (node: T) => {
    refs.forEach(ref => {
      fillRef(ref, node);
    });
  };
}

export function useComposeRef<T>(...refs: Ref<T>[]) {
  return React.useMemo(() => composeRef(...refs), refs);
}
