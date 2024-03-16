import styled from '@emotion/styled';
import { css } from '@emotion/react';

const wrapperDynamicStyles = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  width: 347px;

  margin-right: 18px;
  scroll-snap-align: start;

  @media only screen and (min-width: ${theme.breakpoint[1]}) {
    width: 350px;
  }

  @media only screen and (min-width: ${theme.breakpoint[2]}) {
  }
`;

export const Wrapper = styled.li`
  ${wrapperDynamicStyles}
`;

const columnTitleDynamicStyles = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  padding: 18px 20px 17px;
  margin-bottom: 14px;
  border-radius: ${theme.radius.md};
  color: ${theme.textColor.main};
  background-color: ${theme.backgroundsColor.pageButton};
`;

export const ColumnTitle = styled.div`
  ${columnTitleDynamicStyles}
`;

const taskListDynamicStyles = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  width: 347px;
  height: calc(100vh - 354px);

  @media only screen and (min-width: 768px) {
    width: 350px;
    height: calc(100vh - 393px);
  }
  @media only screen and (min-width: ${theme.breakpoint[2]}) {
    height: calc(100vh - 302px);
  }
`;

export const TaskList = styled.ul`
  ${taskListDynamicStyles}
`;

const dynamicStylesButton = ({ theme }) => css`
  display: block;
  height: 16px;
  transition: scale 250ms ease-in 0s, stroke 250ms ease-in 0s;
  fill: transparent;
  stroke: ${theme.backgroundsColor.columnTitleIcon};
  &:hover,
  &:focus {
    stroke: ${theme.backgroundsColor.columnTitleIconHover};
    scale: 1.08;
  }
`;

export const IconButton = styled.button`
  ${dynamicStylesButton}
`;

export const IconList = styled.ul`
  display: flex;
  align-items: center;
  & > li:not(:last-child) {
    margin-right: 8px;
  }
`;

const containerDynamicStyles = ({ theme }) => css`
  margin-bottom: 14px;
  width: 347px;

  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  @media only screen and (min-width: 768px) {
    width: 350px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.backgroundsColor.scrollBar};
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${theme.backgroundsColor.scrollBarThumb};
  }
`;

export const Container = styled.div`
  ${containerDynamicStyles}
`;
