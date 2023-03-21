import { useEffect, useRef, useState } from 'react';
import { useViewportResize } from './useViewportResize';

export const useNotifyPosition = () => {
  const buttonRef = useRef();
  const [position, setPosition] = useState();

  const viewportSize = useViewportResize();

  useEffect(() => {
    const elementPosition = buttonRef.current.getBoundingClientRect();
    setPosition(elementPosition);
  }, [viewportSize]);

  return { buttonRef, position };
};
