import { useEffect, useRef, useState } from 'react';
import { useViewportResize } from './useViewportResize';

export const useNotifyPosition = () => {
  const buttonRef = useRef();
  const [position, setPosition] = useState();

  const viewportSize = useViewportResize();

  useEffect(() => {
    const { bottom, left, width } = buttonRef.current.getBoundingClientRect();

    const x = left + width;
    const y = bottom;

    setPosition({ x, y });
  }, [viewportSize]);

  return { buttonRef, position };
};
