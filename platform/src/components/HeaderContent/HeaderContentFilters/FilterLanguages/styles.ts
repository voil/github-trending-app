import styled from "styled-components";

export const SelectElement = styled.select`
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  margin-right: 5px;
  padding: 5px;
  outline: none;
  cursor: pointer;
  transition: border 0.5s ease;
  &:hover {
    border: 1px solid ${(props) => props.theme.mainColor};
  }
  @media(max-width: ${(props) => props.theme.breakResponsive}px) {
    margin: 10px 0px;
  }
`;
