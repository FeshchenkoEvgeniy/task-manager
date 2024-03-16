import styled from '@emotion/styled';
import { css } from '@emotion/react';

const HomePageDynamicStyles = ({ theme }) =>
  css`   
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.textColor.theme};
    font-size: ${theme.fontSize[2]};
    line-height: 1.5;
    letter-spacing: -0.26px;
    text-align: center;
    margin: 0 auto;

    @media only screen and (min-width: ${theme.breakpoint[1]}) {      
      height: calc(100vh - 68px);
      flex-direction: column;
      font-size: ${theme.fontSize[3]};
      line-height: 1.28571;
    }
  `;

export const HomePageContainer = styled.div`
  ${HomePageDynamicStyles}
`;

const HomePageTextDynnamicStyles = ({ theme }) => css`
  width: 335px;
  @media only screen and (min-width: ${theme.breakpoint[1]}) {
    width: 486px;
  }
`;

export const HomePageText = styled.p`
  ${HomePageTextDynnamicStyles}
`;

const HomePageBtnDynamicStyles = ({ theme }) => css`
  color: ${theme.textColor.accent};
`;

export const HomePageCreateBoardBtn = styled.button`
  ${HomePageBtnDynamicStyles}
`;
