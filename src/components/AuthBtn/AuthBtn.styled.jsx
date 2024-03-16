import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStylesBtn = ({ theme }) => css`
  width: 100%;
  padding: 14px 0;
  border-radius: ${theme.radius.md};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.authenticationColors.lightButtonBackground};

  color: ${theme.authenticationColors.darkText};
  font-size: ${theme.fontSize[3]};
  font-weight: ${theme.fontWeight.medium};
`;

export const Btn = styled.button`
  ${dynamicStylesBtn}
`;
