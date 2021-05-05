import styled, { createGlobalStyle } from "styled-components";

export const AppRoot = createGlobalStyle`
  *,
  body,
  html {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  * {
    font-family: "Barlow Condensed", sans-serif;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    animation-delay: 0.1s;
    animation-duration: 0.1s;
    animation-iteration-count: 1;
    animation-name: fontfix;
    font-size: 14px;
    height: 100%;
    -animation-timing-function: linear;
    width: 100%;
  }

  @keyframes fontfix {
    from {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fontfix {
    from {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CardHeader = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding: 10px 24px;
  background: #ffffff;
  margin-bottom: -1px;
  color: rgba(0, 0, 0, 0.85);
  border-radius: 2px 2px 0 0;
  border-bottom: 1px solid #f0f0f0;
`;

export const CardContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding: 10px 24px;
  margin-bottom: -1px;
  color: rgba(0, 0, 0, 0.85);
  border-radius: 2px 2px 0 0;
  border-bottom: 1px solid #f0f0f0;
`;

export const ApiError = styled.div`
  padding: 40px 0px;
  text-align: center;
`;

export const ApiSvgError = styled.svg`
  width: 200px;
  fill: ${(props) => props.theme.mainColor};
`;

export const ApiDescriptionError = styled.div`
  font-size: 32px;
  text-align: center;
  padding-top: 10px;
`;
