import { css } from '@emotion/react';
import styled from '@emotion/styled';

const buttonStyle = css`
padding: 10px 20px;
font-size: 16px;
color: #fff;
background-color: teal;
border: none;
border-radius: 5px;
cursor: pointer;
transition: transform 0.5s;
display: flex;
align-items: center;
justify-content: center;

&:hover {
  transform: scale(1.05);
}
`;

const Title = css`
display: flex;
justify-content: center;
`;

export const StyledButton = styled.button`
  ${buttonStyle}
`;

export const StyledTitle = styled.h1`
    ${Title}
`