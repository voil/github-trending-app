import styled from "styled-components";

export const CheckboxElement = styled.input`
  display: inline-block;
  margin-right: 5px;
  border: 1px solid #d9d9d9;
`;

export const FilterDateColumns = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterDateItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding: 0px 10px;
  transition: color 0.5s ease;
  &:hover {
    color: ${(props) => props.theme.mainColor};
  }
`;
