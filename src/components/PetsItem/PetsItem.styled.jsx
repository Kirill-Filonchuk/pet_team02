import styled from 'styled-components';
import { theme } from '../../theme';
import { HiTrash } from 'react-icons/hi';

export const PetItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  padding: 16px 20px 40px 20px;
  margin-bottom: 22px;

  ${theme.mq.tablet} {
    flex-direction: row;
    width: 704px;
    padding: 20px;
  }
  ${theme.mq.desktop} {
    flex-direction: row;
    width: 821px;
    padding: 20px;
  } ;
`;

export const PetImage = styled.img`
  display: block;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  margin-bottom: 20px;
  object-fit: cover;

  ${theme.mq.tablet} {
    width: 161px;
    height: 161px;
    border-radius: 40px;
    margin-right: 32px;
    margin-bottom: 0px;
  }
  ${theme.mq.desktop} {
    width: 161px;
    height: 161px;
    border-radius: 40px;
    margin-right: 32px;
    margin-bottom: 0px;
  } ;
`;
export const ListInfo = styled.ul`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 14px;
  line-height: ${theme.lineHeights[4]};
  letter-spacing: 0.04em;
  width: 240px;
  color: rgba(17, 17, 17, 1);

  ${theme.mq.tablet} {
    width: 471px;
    font-size: 16px;
    line-height: 1.375;
  }

  ${theme.mq.desktop} {
    width: 580px;
    font-size: 16px;
    line-height: 1.375;
  } ;
`;

export const ListInfoItem = styled.li`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ListInfoTitle = styled.span`
  font-weight: ${theme.fontWeights.medium};
  margin-right: 5px;

  ${theme.mq.tablet} {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.375;
  }
  ${theme.mq.desktop} {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.375;
  } ;
`;

export const DeleteIcon = styled.span`
  display: flex;
  position: absolute;
  top: 276px;
  right: 27px;
  justify-content: center;
  align-items: center;
  background-color: rgba(253, 247, 242, 1);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;

  &:hover,
  &:focus {
    background-color: rgba(245, 146, 86, 1);
  }
  ${theme.mq.tablet} {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
  }
  ${theme.mq.desktop} {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
  } ;
`;
export const DeleteImage = styled(HiTrash)`
  width: 17px;
  height: 17px;
  fill: rgba(17, 17, 17, 0.6);

  ${theme.mq.tablet} {
    width: 24px;
    height: 24px;
  }
  ${theme.mq.desktop} {
    width: 24px;
    height: 24px;
  } ;
`;
