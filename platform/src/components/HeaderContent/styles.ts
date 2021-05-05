import styled from "styled-components";

export const HeaderColumns = styled.div`
  display: flex;
  align-items: center;
  @media(max-width: ${(props) => props.theme.breakResponsive}px) {
    flex-direction: column;
  }
`;

export const HeaderColumnItem = styled.div`
  padding: 0px 10px;
`;
