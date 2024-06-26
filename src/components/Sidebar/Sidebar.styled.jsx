import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const sidebarDynamicStyles = ({ theme }) => css`
  z-index: 1;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  top: 0;
  width: 225px;
  height: 100vh;
  margin: 0;
  background-color: ${theme.backgroundsColor.asideMain};
  transform: translateX(-225px);
  transition: transform 250ms ease-in 0s, opacity 250ms ease-in 0s,
    visibility 250ms ease-in 0s;

  &.isOpen {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }

  @media screen and (min-width: ${theme.breakpoint[1]}) {
    width: 260px;
    transform: translateX(-260px);
  }

  @media screen and (min-width: ${theme.breakpoint[2]}) {
    position: static;
    float: left;
    width: 18%;
    height: 100vh;
    transition: transform 0s ease-in 0s, opacity 0s ease-in 0s,
      visibility 0s ease-in 0s;
  }
`;

const containerDynamicStyles = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding-top: 18px;
  padding-bottom: 24px;
  height: 100%;

  @media screen and (min-width: ${theme.breakpoint[1]}) {
    padding-top: 24px;
  }
`;

export const StyledSidebar = styled.aside`
  ${sidebarDynamicStyles}
`;

export const Container = styled.div`
  ${containerDynamicStyles}
`;

export const StyledButton = styled(NavLink)`
  width: 200px;
  display: block;
  color: white;
  background-color: teal;
  text-decoration: none;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  text-align: center;
  margin: 0 auto;

  &.active-link {
    font-weight: bold;
  }

  &:hover {
    background-color: darkslategray;
  }
`;