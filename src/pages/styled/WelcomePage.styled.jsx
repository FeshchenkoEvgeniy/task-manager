import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const dynamicStyle = ({ theme }) =>
  css`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    width: 335px;
    padding: 14px 0;
    border-radius: ${theme.radius.md};
    color: ${theme.authenticationColors.darkText};
    font-size: ${theme.fontSize[3]};
    font-weight: ${theme.fontWeight.medium};
    letter-spacing: -0.28px;
    &:hover {
      background-color: ${theme.authenticationColors.darkButtonBackground};
      color: ${theme.authenticationColors.lightText};
    }
    @media screen and (min-width: ${theme.breakpoint[1]}) {
      width: 344px;
    }
  `;

const WelcomePageContainerDynamicStyle = ({ theme }) =>
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

export const WelcomePageContainer = styled.div`
  ${WelcomePageContainerDynamicStyle};
`;

export const StyledLink = styled(NavLink)`
  ${dynamicStyle};
`;
