import styled from '@emotion/styled';
import { css } from '@emotion/react';

const formDynamikStyles = ({ theme }) => css`
  width: 287px;
  color: ${theme.authenticationColors.lightText};
  @media screen and (min-width: ${theme.breakpoint[1]}) {
    width: 302px;
  }
`;

const titleDynamicStyles = ({ theme }) => css`
  font-size: ${theme.fontSize[5]};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.textColor.main};
  margin-bottom: 24px;
`;

const errorMessageDynamicStyles = ({ theme }) => css`
  color: ${theme.textColor.main};
  margin-bottom: 10px;
  text-align: center;
`;

const inputDynamicStyles = ({ theme }) => css`
  font-size: ${theme.fontSize[3]};
  width: 100%;
  height: 49px;
  padding: 14px 18px;
  background-color: transparent;
  border: 1px solid ${theme.backgroundsColor.formButton};
  border-radius: ${theme.radius.md};
  color: ${theme.textColor.main};
  opacity: 0.4;
  margin-bottom: 24px;

  &:focus {
    outline: none;
    opacity: 1;
  }
`;

export const Form = styled.form`
  ${formDynamikStyles}
`;

export const Title = styled.h3`
  ${titleDynamicStyles}
`;

export const ErrorMessage = styled.p`
  ${errorMessageDynamicStyles};
`;

export const Input = styled.input`
  ${inputDynamicStyles}
`;
