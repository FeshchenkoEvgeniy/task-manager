import { css } from '@emotion/react';
import styled from '@emotion/styled';

const formStyle = css`
margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 400px;
  max-width: 90%;
`;

const labelStyle = css`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
const inputStyle = css`
  padding: 10px;
  font-size: 14px;
  border: 2px solid teal;
  border-radius: 5px;
  margin-top: 5px;
  &:focus {
    outline: none;
    border-color: black;
  }
`;

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

export const StyledForm = styled.form`
  ${formStyle}
`;

export const StyledLabel = styled.label`
  ${labelStyle}
`;

export const StyledInput = styled.input`
  ${inputStyle}
`;

export const StyledButton = styled.button`
  ${buttonStyle}
`;