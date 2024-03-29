import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyledAddCardButton = ({ theme }) => css`
  display: flex;
  align-items: center;
  width: 335px;
  padding: 14px 79px;
  background-color: ${theme.backgroundsColor.pageButton};
  border-radius: ${theme.radius.md};
  color: ${theme.textColor.addColumnButton};
  font-weight: ${theme.fontWeight.medium};
  letter-spacing: -0.28px;
  transition: scale 250ms ease-in 0s;
  scroll-snap-align: center;
  margin-right: 20px;

  @media only screen and (min-width: ${theme.breakpoint[1]}) {
    margin-right: 32px;
  }
  @media only screen and (min-width: ${theme.breakpoint[2]}) {
    margin-right: 24px;
  }

  &:hover {
    scale: 1.05;
  }
`;

const dynamicStilesSvg = ({ theme }) => css`
  width: 14px;
  height: 14px;
  stroke: ${theme.backgroundsColor.addColumnIconStroke};
`;

const dynamicStylesBox = ({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 28px;
  height: 28px;
  background-color: ${theme.backgroundsColor.addColumnIconFill};
  border-radius: 8px;
`;

export const Button = styled.button`
  ${dynamicStyledAddCardButton}
`;

export const Box = styled.span`
  ${dynamicStylesBox};
`;

export const Svg = styled.svg`
  ${dynamicStilesSvg}
`;
