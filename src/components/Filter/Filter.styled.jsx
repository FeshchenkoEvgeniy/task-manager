import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStylesFilters = ({ theme }) => css`
  display: flex;
  align-items: center;
  height: 20px;
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${theme.textColor.theme};
  transition: color 250ms ease-in 0s;

  &:hover,
  &focus {
    color: ${theme.textColor.accent};
  }
`;

export const Filters = styled.button`
  ${dynamicStylesFilters}
`;

const dynamicStylesFilterIcon = ({ theme }) => css`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  stroke: currentColor;
  transition: stroke 250ms ease-in 0s;
  &:hover,
  &focus {
    stroke: currentColor;
  }
`;

export const FilterIcon = styled.svg`
  ${dynamicStylesFilterIcon}
`;
