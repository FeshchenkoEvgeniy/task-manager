import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button = css`
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
  transition: transform 0.3s, background-color 0.3s;
  transition-delay: 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: #0056b3;
  }
`;

const EmployeeContainer = css`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;

const EmployeeRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const EmployeeInfo = css`
  flex: 1;
  margin: 0;
  padding: 0 10px;
  font-size: 14px;
`;

export const StyledButton = styled.button`
  ${Button}
`;

export const StyledEmployeeContainer = styled.div`
    ${EmployeeContainer}
`

export const StyledEmployeeRow = styled.div`
  ${EmployeeRow}
`;

export const StyledEmployeeInfo = styled.p`
    ${EmployeeInfo}
`