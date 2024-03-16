import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicWelcomeContainerStyles = ({ theme }) => css`
  width: 100%;
  margin-right: auto;
  margin-left: auto;  
  padding-right: 20px;
  padding-left: 20px;

  @media only screen and (min-width: ${theme.breakpoint[1]}) {
    width: 473px;
    padding-right: 0;
    padding-left: 0;
  }
`;

const dynamicThumbStyles = ({ theme }) => css`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  width: 166px;

  @media only screen and (min-width: ${theme.breakpoint[1]}) {
    width: 310px;
  }
`;

const dynamicTitleStyles = ({ theme }) => css`
  color: ${theme.authenticationColors.darkText};
  font-size: ${theme.fontSize[6]};
  font-weight: ${theme.fontWeight.semibold};
  letter-spacing: -1.12px;

  @media only screen and (min-width: ${theme.breakpoint[1]}) {
    font-size: ${theme.fontSize[7]};
    letter-spacing: -1.6px;
  }
`;

const dynamicSvgStyles = ({ theme }) => css`
  width: 40px;
  height: 40px;
  margin-right: 14px;

  @media only screen and (min-width: ${theme.breakpoint[1]}) {
    width: 48px;
    height: 48px;
  }
`;


export const WelcomeContainer = styled.div`
  ${dynamicWelcomeContainerStyles}
`;

export const Thumb = styled.div`
  ${dynamicThumbStyles}
`;

export const LogoThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  ${dynamicTitleStyles}
`;

export const Svg = styled.svg`
  ${dynamicSvgStyles}
`;
