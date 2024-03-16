import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyledHeader = ({ theme }) => css`
  color: ${theme.textColor.main};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSize[5]};
  letter-spacing: -0.36px;
  margin-bottom: 24px;
`;

const dynamicStylesForm = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  color: ${theme.authenticationColors.lightText};
  & > label {
    margin-bottom: 14px;
  }
`;
const errorMessageDynamicStyles = ({ theme }) => css`
  color: ${theme.textColor.main};
  margin-bottom: 10px;
  text-align: center;
`;

const dynamicStylesInput = ({ theme }) => css`
  width: 100%;
  padding: 14px 18px;
  background-color: ${theme.backgroundsColor.popUpForm};
  border: 1px solid ${theme.authenticationColors.lightButtonBackground};
  border-radius: ${theme.radius.md};
  color: ${theme.textColor.main};

  @media screen and (min-width: ${theme.breakpoint[0]}) {
    width: 287px;
  }

  @media screen and (min-width: ${theme.breakpoint[1]}) {
    width: 302px;
  }
`;

const dynamicStylesTextArea = ({ theme }) => css`
  width: 100%;
  min-height: 154px;
  margin-bottom: 24px;
  padding: 14px 18px;
  background-color: ${theme.backgroundsColor.popUpForm};
  border: 1px solid ${theme.authenticationColors.lightButtonBackground};
  border-radius: ${theme.radius.md};
  color: ${theme.textColor.main};
  resize: none;
`;

const dynamicStylesLabelColorText = ({ theme }) => css`
  color: ${theme.textColor.dayColor};
  font-size: ${theme.fontSize[2]};
  margin-bottom: 4px;
`;
const dynamicStylesRadio = ({ theme, clr }) => css`
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: flex;
    align-items: center;
    user-select: none;
    &::before {
      content: '';
      display: inline-block;
      width: 14px;
      height: 14px;
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
    opacity: 1;
  }
  & + label > svg {
    opacity: 0;
    margin-left: -14px;
  }
`;
export const StyledHeader = styled.form`
  ${dynamicStyledHeader}
`;
export const Form = styled.form`
  ${dynamicStylesForm}
`;
export const Input = styled.input`
  ${dynamicStylesInput}
`;
export const TextArea = styled.textarea`
  ${dynamicStylesTextArea}
`;

export const LabelColorBox = styled.div`
  margin-bottom: 14px;
`;
export const LabelColorText = styled.p`
  ${dynamicStylesLabelColorText}
`;
export const CustomRadio = styled.input`
  ${dynamicStylesRadio}
`;
export const CustomRadioContainer = styled.div`
  display: flex;
  gap: 8px;
`;
export const ErrorMessage = styled.p`
  ${errorMessageDynamicStyles};
`;
