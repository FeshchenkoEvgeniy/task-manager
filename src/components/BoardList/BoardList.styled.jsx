import styled from '@emotion/styled';
import { css } from '@emotion/react';

const wrapperDynamicStyles = ({ theme }) => css`
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  ${wrapperDynamicStyles}
`;

const titleDynamicStyles = ({ theme }) => css`
  margin-left: 14px;
  margin-bottom: 8px;
  align-self: flex-start;
  color: ${theme.textColor.secondary};
  font-size: ${theme.fontSize[2]};
  letter-spacing: -0.24px;

  @media screen and (min-width: ${theme.breakpoint[1]}) {  
    margin-left: 24px;
  }
`;

export const Title = styled.h2`
  ${titleDynamicStyles}
`;
