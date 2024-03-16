import styled from '@emotion/styled';
import { css } from '@emotion/react';

const wrapperDynamicStyles = ({ theme }) => css`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-left: 14px;
  margin-bottom: 70px;

  @media screen and (min-width: ${theme.breakpoint[1]}) {
    margin-left: 24px;
    margin-bottom: 60px;
  }
  &::before {
    content: '';
    width: 32px;
    height: 32px;
    background-color: #1f1f1f;
    cursor: pointer;
    border-radius: ${theme.radius.md};
  }
`;

const logoDynamicStyles = ({ theme }) => css`
  fill: ${theme.logos.icon};
  position: absolute;
  margin: 0 auto;
  left: 2px;
`;

const dynamicTextColor = ({ theme }) => css`
  font-size: ${theme.fontSize[4]};
  font-style: normal;
  line-height: normal;
  font-weight: ${theme.fontWeight.semibold};
  letter-spacing: -0.64px;
  color: ${theme.textColor.addButton};
`;

export const StyledWrapper = styled.div`
  ${wrapperDynamicStyles}
`;

export const StyledLogo = styled.svg`
  ${logoDynamicStyles}
`;

export const StyledSpanLogo = styled.span`
  ${dynamicTextColor}
`;
