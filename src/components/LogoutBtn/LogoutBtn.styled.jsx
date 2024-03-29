import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicTextColor = ({ theme }) => css`
  color: ${theme.textColor.addButton};
`;

export const StyledLogOutBtn = styled.button(`
display: flex;
gap: 14px;
justify-content: center;
align-items: center;
margin-left: 24px;
width: 105px;
height: 32px;
`);

export const StyledSpan = styled.span`
  ${dynamicTextColor}
  font-size: 16px;
  font-weight: 500;
`;

const IconDynamicStyles = ({ theme, selected }) => css`
  width: 32px;
  height: 32px;
  stroke: ${theme.logOutIcons.logOutIconStroke};
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoint[3]}) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const Icon = styled.svg`
  ${IconDynamicStyles}
`;
