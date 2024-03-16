import styled from '@emotion/styled';
import { css } from '@emotion/react';

const wrapperDynamicStyles = ({ theme }) => css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
  scroll-snap-align: start;
  opacity: 0.4;

  @media screen and (min-width: ${theme.breakpoint[1]}) {
    padding: 20px 24px;
  }

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &.active {
    background-color: ${theme.backgroundsColor.asideSecondary};
    opacity: 1;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      border-left: 4px solid ${theme.labelsColor.green};
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
      scroll-snap-align: start;
    }
  }
`;

export const Wrapper = styled.li`
  ${wrapperDynamicStyles}
`;

const svgDynamicStyles = ({ theme }) => css`
  stroke: ${theme.backgroundsColor.borderIcon};
  fill: transparent;
`;

export const Svg = styled.svg`
  ${svgDynamicStyles}
`;

const titleDynamicStyles = ({ theme }) => css`
  margin-left: 4px;
  margin-right: auto;
  color: ${theme.textColor.addButton};
  font-size: ${theme.fontSize[3]};
  font-weight: ${theme.fontWeight.medium};
  letter-spacing: -0.28px;
`;

export const Title = styled.p`
  ${titleDynamicStyles}
`;

const activeSvgDynamicStyles = ({ theme }) => css`
  stroke: ${theme.backgroundsColor.columnTitleIcon};
  fill: transparent;
  transition: scale 250ms ease-in 0s, stroke 250ms ease-in 0s;
  &:hover,
  &:focus {
    stroke: ${theme.labelsColor.green};
    scale: 1.08;
  }
`;
export const ActiveSvg = styled.svg`
  ${activeSvgDynamicStyles}
`;

const dynamicStylesButton = ({ theme }) => css`
  display: block;
  height: 16px;
`;

export const IconButton = styled.button`
  ${dynamicStylesButton}
`;

const iconsWrapperDynamicStyles = ({ theme }) => css`
  display: flex;
  gap: 8px;
`;

export const IconsWrapper = styled.div`
  ${iconsWrapperDynamicStyles}
`;
