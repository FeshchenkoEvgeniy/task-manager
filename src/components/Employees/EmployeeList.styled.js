
import styled from '@emotion/styled';

export const StyledTable = styled.table`
  width: calc(100vw - 346px);
  margin-top: 20px;
`;

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const StyledTableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

export const StyledTableCell = styled.td`
  padding: 10px;
  text-align: left;
`;

export const StyledButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  background-color: teal;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
  transition: transform 0.3s;
  transition-delay: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

`;
