import styled from 'styled-components';

export const PetItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: min-content;
  background: rgba(255, 255, 255, 1);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  padding: 16px 20px 40px 20px;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 704px;
    padding: 20px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    width: 821px;
    padding: 20px;
  }
`;
export const PetImage = styled.img`
  display: block;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
    border-radius: 40px;
    margin-right: 32px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
    border-radius: 40px;
    margin-right: 32px;
    margin-bottom: 0px;
  }
`;
export const ListInfo = styled.ul``;
export const ListInfoItem = styled.li`
  color: rgba(17, 17, 17, 1);
  font-size: 14px;
  line-height: 1.35;
  margin-bottom: 12px;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.375;
  }
  @media screen and (min-width: 1280px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.375;
  }
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
  width: 0px;
  height: 0px;

  &:hover,
  &:focus {
    background-color: rgba(245, 146, 86, 1);
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
  }
`;
export const DeleteImage = styled.img`
  width: 17px;
  height: 17px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 21px;
  }
  @media screen and (min-width: 1280px) {
    width: 20px;
    height: 21px;
  }
`;
