import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStylesForm = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 14px;
  color: ${theme.authenticationColors.lightText};
  margin-top: 40px;
  & > button {
    margin-top: 10px;
  }
  & > label > div {
    position: relative;
  }
`;

const dynamicStylesInput = ({ theme }) => css`
  width: 100%;
  padding: 14px 18px;
  background-color: ${theme.authenticationColors.inputBackground};
  border: 1px solid ${theme.authenticationColors.lightButtonBackground};
  border-radius: ${theme.radius.md};
  color: ${theme.authenticationColors.lightText};
`;

const svgDynamicStyles = ({ theme }) => css`
  stroke: ${theme.authenticationColors.lightText};
`;

export const ShowPassword = styled.i`
  position: absolute;
  top: 27%;
  right: 5%;
`;
export const Form = styled.form`
  ${dynamicStylesForm}
`;
export const Input = styled.input`
  ${dynamicStylesInput}
`;

export const Svg = styled.svg`
  ${svgDynamicStyles}
`;
