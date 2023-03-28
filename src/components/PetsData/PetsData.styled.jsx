import styled from 'styled-components';




export const PetsTitle = styled.h2`
  color: rgba(17, 17, 17, 1);
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  /* width: 87px; */
  /* margin-bottom: 24px; */

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.375;
    /* width: 113px; */
    /* font-size: 28px; */
    /* margin-bottom: 32px; */
    /* margin-left: 33px; */
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.375;
    /* width: 207px; */
    /* margin-bottom: 24px; */
    /* margin-left: 0px; */
  }
`;

export const ButtonWrapper = styled.div`
  /* position: absolute; */
  /* top: 0px; */
  /* right: 0; */
  display: flex;
  align-items: center;
  /* margin-bottom: 31px; */
  /* margin-top: -6px; */

  @media screen and (min-width: 768px) {
    /* position: absolute; */
    /* top: 0px; */
    /* right: 0; */
    /* margin-top: 0; */
  }
  @media screen and (min-width: 1280px) {
    /* position: absolute; */
    /* top: 0px; */
    /* right: 0px; */
    /* margin-top: 0; */
  }
`;

export const ButtonTitle = styled.h3`
  color: rgba(17, 17, 17, 1);
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  /* width: 73px; */
  margin-right: 15px;
`;

export const AddButton = styled.button`
  display: flex;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 0;
  justify-content: center;
  align-items: center;
  border: rgba(245, 146, 86, 1);
  border-radius: 50%;
  background-color: rgba(245, 146, 86, 1);
  color: rgba(245, 146, 86, 1);
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    background-color: #eb7f3c;
  }
`;

export const Wrapper = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    /* display: flex;
    justify-content: center; */
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const StyledButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
`;

export const Pictures = styled.div`
  width: 280px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  padding: 16px 20px 40px 20px;
  margin-bottom: 22px;
  color: rgba(17, 17, 17, 1);
  font-size: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 821px;
    padding: 20px;
  }
`;
export const LoaderUser = styled.div`
  margin: auto;
`;
