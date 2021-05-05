import styled from "styled-components";

export const ListItem = styled.div`
  padding: 10px 10px 20px 10px;
  background: #fafafa;
  border-bottom: 1px dashed #d4d4d4;
  &:nth-child(2n + 1) {
    background: #e8e7e7;
  }
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    text-align: center;
    padding: 30px 10px 50px 10px;
  }
`;

export const ListElementItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px 20px 0px;
  border-bottom: 1px solid #d4d4d4;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AuthorLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0px 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  color: ${(props) => props.theme.mainColor};
  &:last-child {
    border-right: 0px;
  }
`;

export const AvatarList = styled.img`
  width: 24px;
  border-radius: 50px;
`;

export const AuthorSpan = styled.span`
  font-size: 14px;
  display: inline-block;
  padding: 0px 0px 0px 5px;
`;

export const AuthorDescription = styled.span`
  font-size: 14px;
  display: inline-block;
  padding: 0px 5px 0px 0px;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    margin: 10px 0px;
  }
`;
