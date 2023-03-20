import styled from 'styled-components';

export const Card = styled('div')`
  position: absolute;
  top: ${p => p.y}px;
  left: ${p => p.x}px;

  width: 500px;
  height: 300px;

  background-color: azure;
`;
