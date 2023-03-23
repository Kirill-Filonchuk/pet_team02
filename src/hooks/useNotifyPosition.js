import { useEffect, useRef, useState } from 'react';
import { useViewportResize } from './useViewportResize';

export const useNotifyPosition = () => {
  const buttonRef = useRef();
  const [position, setPosition] = useState();

  const viewportSize = useViewportResize();
  const scrollValue = window.scrollY;

  useEffect(() => {
    const elementPosition = buttonRef.current.getBoundingClientRect();
    setPosition(elementPosition);
  }, [viewportSize, scrollValue]);

  return { buttonRef, position };
};
