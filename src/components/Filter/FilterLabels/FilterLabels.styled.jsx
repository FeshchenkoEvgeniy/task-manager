import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const FilterModalWindow = styled.div`
  width: 252px;
`;

const dynamicStylesRadio = ({ theme, clr }) => css`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: flex;
    align-items: center;
    user-select: none;

    color: ${theme.textColor.cardSecondary};
    font-size: ${theme.fontSize[2]};
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.24px;

    &::before {
      content: '';

      display: inline-block;
      width: 14px;
      height: 14px;
      margin-right: 8px;

      background-color: ${theme.labelsColor[clr]};

      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
  }

  &:checked + label::before {
    background-color: #fffffe00;
  }

  &:checked + label > svg {
    position: absolute;
    top: 0;
    left: 0;

    opacity: 1;
  }

  &:checked + label > span {
    color: ${theme.textColor.main};
  }
  & + label > svg {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
`;

export const CustomRadio = styled.input`
  ${dynamicStylesRadio}
`;
export const CustomRadioContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RadioItem = styled.li`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const dynamicStylesLabelColors = ({ theme }) => css`
  margin-bottom: 16px;
  color: ${theme.textColor.main};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const LabelColors = styled.p`
  ${dynamicStylesLabelColors}
`;

const dynamicStylesShowAllBtn = ({ theme }) => css`
  color: ${theme.textColor.cardSecondary};
  font-size: ${theme.fontSize[2]};
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
`;

export const ShowAllBtn = styled.button`
  ${dynamicStylesShowAllBtn}
`;
