import { BiSearchAlt2 } from 'react-icons/bi';
import { CgCloseO } from 'react-icons/cg';
import styled from 'styled-components';
import { theme } from 'theme';

export const SearchForm = styled('form')`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  ${theme.mq.tablet} {
    margin-bottom: 60px;
    width: 608px;
  }
`;

export const SearchField = styled('input')`
  padding: 9px 48px 9px 12px;
  width: 100%;

  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: #535353;

  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: ${p => p.theme.radii.small};

  ${theme.mq.tablet} {
    padding: 9px 56px 9px 20px;
    font-size: 20px;
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid rgba(245, 146, 86, 0.5);
  }
`;

export const IconButton = styled('button')`
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;

  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);

  background-color: transparent;
  border: none;

  ${theme.mq.tablet} {
    width: 24px;
    height: 24px;
  }

  &:focus,
  &:focus-visible {
    box-shadow: none;
  }
`;

export const SearchIcon = styled(BiSearchAlt2)`
  color: ${theme.colors.black};
  width: 100%;
  height: 100%;
`;

export const ClearIcon = styled(CgCloseO)`
  color: ${theme.colors.black};
  width: 100%;
  height: 100%;
`;

export const ClearIconWrapper = styled('div')`
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;

  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);

  background-color: transparent;
  border: none;

  ${theme.mq.tablet} {
    width: 24px;
    height: 24px;
  }

  &:focus,
  &:focus-visible {
    box-shadow: none;
  }
`;
