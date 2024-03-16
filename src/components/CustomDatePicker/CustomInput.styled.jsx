import { css } from '@emotion/react';
import styled from '@emotion/styled';

const styledDateDeadline = ({ theme }) => css`
  position: absolute;
  top: 0;
  left: 0;
  color: ${theme.textColor.accent};
  font-size: ${theme.fontSize[3]};
  font-weight: ${theme.fontWeight.medium};
  letter-spacing: -0.28px;
`;

export const StyledInput = styled.div`
  position: relative;
  opacity: 0;
  z-index: 20;
`;

const styledContainer = ({ theme }) => css`
  position: relative;
  margin-bottom: 20px;
  & .react-datepicker {
    background-color: ${theme.backgroundsColor.main};
    border-color: ${theme.backgroundsColor.formButton};
    border-radius: ${theme.radius.md};
    padding: 9px;
  }
  & .react-datepicker__header {
    background-color: ${theme.backgroundsColor.main};
    border: none;
    padding-bottom: 0;
  }
  & .react-datepicker__current-month {
    color: ${theme.textColor.main};
    margin: 0 auto;
    width: 197px;
    border-bottom: 1px solid ${theme.backgroundsColor.datePickerCurMonth};

    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize[4]};
    letter-spacing: -0.36px;
  }
  & .react-datepicker__navigation {
    top: 17px;
    &-icon::before {
      border-color: ${theme.textColor.dayColor};
    }
  }

  & .react-datepicker__navigation-icon--next::before {
    transform: rotate(45deg);
  }

  .react-datepicker__navigation:hover :before {
    border-color: ${theme.backgroundsColor.formButton};
  }
  & .react-datepicker__day-name {
    font-size: ${theme.fontSize[3]};
    font-family: Poppins;
    letter-spacing: -0.28px;
    color: ${theme.textColor.dayColor};
    width: 23px;
    line-height: 23px;
    height: 23px;
  }

  & .react-datepicker__day {
    font-size: ${theme.fontSize[3]};
    font-family: Poppins;
    letter-spacing: -0.28px;
    width: 23px;
    line-height: 23px;
    height: 23px;
    color: ${theme.textColor.main};
    &:hover {
      border-radius: 24px;
      background-color: ${theme.backgroundsColor.selectedDateHover};
      color: ${theme.textColor.selectedDate};
    }
    &--selected {
      border-radius: 24px;
      color: ${theme.textColor.selectedDate};
      background-color: ${theme.backgroundsColor.formButton};
    }
  }
  & .react-datepicker__day--disabled {
    color: ${theme.backgroundsColor.datePickerCurMonth};
  }
  & .react-datepicker__triangle {
    display: none;
  }
`;

export const Container = styled.div`
  ${styledContainer}
`;

export const DateDeadline = styled.p`
  ${styledDateDeadline}
`;
