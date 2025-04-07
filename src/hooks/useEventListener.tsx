import { useEffect, useRef, useLayoutEffect } from "react";
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const useEventListener = ({ eventName, handler, element, options }: any) => {
  const savedHandler = useRef(handler);
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(() => {
    const targetElement = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }
    const eventListener = (event: any) => savedHandler.current(event);
    targetElement.addEventListener(eventName, eventListener, options);
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, options]);
};

export default useEventListener;
