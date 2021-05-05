import styled from "styled-components";

export const ActionsListColumns = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px 0px 0px;
  @media(max-width: ${(props) => props.theme.breakResponsive}px) {
    justify-content: center;
  }
`;

export const SpaceActionsList = styled.div`
  width: 75px;
  display: flex;
  padding: 0px 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
`;

export const SvgElement = styled.svg`
  width: 20px;
  margin-right: 5px;
  display: inline-block;
`;

export const SvgContent = styled.div`
  display: inline-block;
`;
