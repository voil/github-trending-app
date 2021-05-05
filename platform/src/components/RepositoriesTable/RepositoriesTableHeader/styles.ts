import styled from "styled-components";

interface ColorLanguageInterface {
  readonly color: string;
}

export const HeaderListLink = styled.a`
  color: ${(props) => props.theme.mainColor};
`;

export const HeaderListColumnItem = styled.div`
  padding: 0px 5px;
`;

export const HeaderListColumns = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 10px 0px;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    flex-direction: column;
  }
`;

export const SpaceHeaderList = styled.div`
  display: inline-block;
`;

export const AvatarHeaderList = styled.img`
  width: 35px;
  border-radius: 50px;
  border: 1px solid #d4d4d4;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    width: 100px;
    margin-bottom: 10px;
  }
`;

export const LanguageDescription = styled.span`
  font-size: 12px;
`;

export const ColorLanguage = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin-right: 5px;
  background: ${(props: ColorLanguageInterface) => props.color};
`;
