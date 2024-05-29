import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStylesBtn = ({ theme }) => css`
  width: 100%;
  padding: 10px 0 11px;
  border-radius: ${theme.radius.md};
  margin: 10px auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.backgroundsColor.formButton};

  color: ${theme.textColor.button};
  font-size: ${theme.fontSize[3]};
  font-weight: ${theme.fontWeight.medium};
  transition: scale 250ms ease-in 0s;
  &:hover,
  &focus {
    scale: 1.05;
  }
`;

export const BtnForm = styled.button`
  ${dynamicStylesBtn}
`;
