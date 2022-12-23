// libs
import type { EffectCallback, DependencyList } from "react";
import { useEffect, useRef } from "react";

export const useUpdateEffect = (
  effect: EffectCallback,
  deps: DependencyList
) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
