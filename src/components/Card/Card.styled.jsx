import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const priorityIndicator = (priority, theme) => {
  let priorityColor;

  switch (priority) {
    case 'high':
      priorityColor = theme.labelsColor.green;

      break;
    case 'medium':
      priorityColor = theme.labelsColor.pink;

      break;
    case 'low':
      priorityColor = theme.labelsColor.lilac;

      break;
    default:
      priorityColor = theme.labelsColor.gray;

      break;
  }
  return priorityColor;
};

const dynamicStylesWrapper = ({ priority, theme }) => css`
  position: relative;
  height: 154px;
  width: 335px;
  padding: 14px 20px 14px 24px;
  border-radius: ${theme.radius.md};
  background-color: ${theme.backgroundsColor.cardBgColor};
  scroll-snap-align: start;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 154px;
    border-left: 4px solid ${priorityIndicator(priority, theme)};
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    scroll-snap-align: start;
  }

  &::after {
    content: '';
    position: absolute;
    left: 24px;
    top: 90px;
    width: 291px;
    border-bottom: 1px solid ${theme.backgroundsColor.cardSeparator};
  }
`;
export const Wrapper = styled.li`
  ${dynamicStylesWrapper}
`;

const dynamicStylesTaskTitle = ({ theme }) => css`
  margin-bottom: 8px;
  font-weight: ${theme.fontWeight.semibold};
  color: ${theme.textColor.main};
`;

export const TaskTitle = styled.p`
  ${dynamicStylesTaskTitle}
`;

const dynamicStylesTaskDescription = ({ theme }) => css`
  position: relative;
  height: 35px;
  margin-bottom: 28px;
  color: ${theme.textColor.cardSecondary};
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${theme.fontSize[2]};
  line-height: 16px;
  letter-spacing: -0.24px;
`;

export const TaskDescription = styled.p`
  ${dynamicStylesTaskDescription}
`;

export const Box = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

const dynamicStylesBell = ({ time, theme }) => css`
  height: 16px;
  fill: ${time < 0 ? 'rgba(255, 3, 3, 0.901)' : 'transparent'};
  stroke: ${time < 0 ? 'transparent' : theme.textColor.accent};
`;

export const BellWrapper = styled.div`
  ${dynamicStylesBell}
`;
