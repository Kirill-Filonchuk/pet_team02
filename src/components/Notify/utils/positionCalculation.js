export const positionCalculation = position => {
  const { top, left, width, height } = position;

  const LEFT = 'left';
  const RIGHT = 'right';
  const TOP = 'top';
  const BOTTOM = 'bottom';

  const x = left + width / 2;
  const y = top + height / 2;
  const hor = x <= window.innerWidth / 2 ? LEFT : RIGHT;
  const ver = y <= window.innerHeight / 2 ? TOP : BOTTOM;

  return {
    left: `${x}px`,
    top: `${y}px`,
    transformX: `${hor === RIGHT ? '-100%' : 0}`,
    transformY: `${ver === BOTTOM ? '-100%' : 0}`,
    borderTL: `${ver === TOP && hor === LEFT ? 0 : '20px'}`,
    borderTR: `${ver === TOP && hor === RIGHT ? 0 : '20px'}`,
    borderBR: `${ver === BOTTOM && hor === RIGHT ? 0 : '20px'}`,
    borderBL: `${ver === BOTTOM && hor === LEFT ? 0 : '20px'}`,
  };
};
