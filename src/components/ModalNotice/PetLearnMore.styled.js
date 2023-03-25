import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'components/UIKit/Button/Button.styled';
import { Label } from 'components/NoticesCard/NoticesCard.styled';
import { AiFillHeart } from 'react-icons/ai';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 60px 20px 40px 20px;
  max-height: calc(100vh - 20px);
  overflow-y: auto;
  width: 280px;

  ${p => p.theme.mq.tablet} {
    width: 704px;
    padding: 32px 24px 32px 20px;
  }
`;

export const ModalNoticeCard = styled.article`
  // position: relative;
`;

export const PositionWrapper = styled.div`
  ${p => p.theme.mq.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const PetImage = styled.img`
  width: 100%px;
  height: 240px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;
  margin-bottom: 16px;

  ${p => p.theme.mq.tablet} {
    width: 288px;
    height: 328px;
    object-fit: cover;
    margin-bottom: 0px;
  }
`;

export const Mark = styled(Label)`
  top: 80px;
  left: 20px;

  ${p => p.theme.mq.tablet} {
    top: 52px;
  }
`;

export const PetTitle = styled.h3`
  margin-bottom: 16px;
  width: 100%;
  mix-height: 33px;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.text};

  ${p => p.theme.mq.tablet} {
    margin-bottom: 20px;
    mix-height: 38px;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.366;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 308px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;

  ${p => p.theme.mq.tablet} {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const DescriptionContainerEnd = styled(DescriptionContainer)`
  margin-bottom: 0px;
  line-height: 1.357;
  color: ${p => p.theme.colors.text};
`;

export const PetKey = styled.span`
  width: 63px;
  font-weight: ${p => p.theme.fontWeights.semiBold};

  ${p => p.theme.mq.tablet} {
    width: 75px;
  }
`;

export const Value = styled.p`
  width: 122px;
  font-weight: ${p => p.theme.fontWeights.medium};

  ${p => p.theme.mq.tablet} {
    width: 183px;
  }
`;

export const LinkWrapper = styled.div`
  width: 122px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transition-property: color;
  transition-duration: ${p => p.theme.transitions.durations.default};
  transition-timing-function: ${p => p.theme.transitions.functions.default};

  &:hover {
    color: ${p => p.theme.colors.accent};
    text-overflow: clip;
    width: auto;
  }

  ${p => p.theme.mq.tablet} {
    width: 183px;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;

    &:hover {
      color: ${p => p.theme.colors.accent};
    }
  }
`;

export const PetOwnerContacts = styled.a`
  color: inherit;
  transition-property: color;
  transition-duration: ${p => p.theme.transitions.durations.default};
  transition-timing-function: ${p => p.theme.transitions.functions.default};
`;

export const PetComment = styled.p`
  margin-top: 28px;
  margin-bottom: 40px;
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 14px;

  ${p => p.theme.mq.tablet} {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
  }
`;

export const PetCommentTitle = styled.span`
  margin-right: 5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.357;

  ${p => p.theme.mq.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const BtnWrapper = styled.div`
  ${p => p.theme.mq.tablet} {
    dislay: flex;
    gap: 12px;
  }
`;

export const ContactBtn = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  margin-bottom: 12px;
  padding: 0;
  background-color: transparent;

  padding: 6px 0;
  width: ${({ width }) => (width ? width : '100%')};

  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${p => (p.color ? p.color : p.theme.colors.accent)};

  background: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};

  transition-property: color, background-color;
  transition-duration: ${p => p.theme.transitions.durations.default};
  transition-timing-function: ${p => p.theme.transitions.functions.default};

  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const ToFavoriteBtn = styled(Button)`
  color: ${p => p.theme.colors.black};
  background-color: ${p =>
    p.isFavorite ? p.theme.colors.accent : p.theme.colors.white};

  &:hover {
    background-color: ${p =>
      p.isFavorite ? p.theme.colors.white : p.theme.colors.accent};
    color: ${p => p.theme.colors.black};
  }

  &:hover > svg {
    fill: ${p => (p.isFavorite ? p.theme.colors.accent : p.theme.colors.white)};
  }
`;

export const HeartIconForBtn = styled(AiFillHeart)`
  width: 16px;
  height: 16px;
  fill: ${p => (p.favorite ? p.theme.colors.white : p.theme.colors.accent)};

  transition-property: fill;
  transition-duration: ${p => p.theme.transitions.durations.default};
  transition-timing-function: ${p => p.theme.transitions.functions.default};
`;
