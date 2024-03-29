import { css } from '@emotion/react';
import styled from '@emotion/styled';

const dynamicStyle = ({ theme }) =>
  css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;    
    height: 100vh;

    background: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 25%,
      #52958B 92.19%
    );

    @media screen and (min-width: ${theme.breakpoint[4]}) {
      width: 344px;
    }
  `;

export const AuthContainer = styled.div`
  ${dynamicStyle};
`;
