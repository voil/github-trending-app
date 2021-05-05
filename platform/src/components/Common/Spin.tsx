import styled from "styled-components";

interface SpinMaskInterface {
  spinning?: boolean;
  children?: JSX.Element | JSX.Element[];
}

const SpinContent = styled.div`
  position: relative;
`;

const SpinLoadingElement = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.mainColor};
  display: ${(props: SpinMaskInterface) => (props.spinning ? "block" : "none")};
  margin: 100px auto;
  width: 1em;
  height: 1em;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-radius: 50%;
  position: absolute;
  text-indent: -9999em;
  animation: spinning 1.3s infinite linear;
  transform: translateZ(0);

  @keyframes spinning {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
        0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
        0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
        2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }
`;

const SpinContentMask = styled.div`
  position: relative;
  transition: color 0.5s ease;
  filter: ${(props: SpinMaskInterface) =>
    props.spinning ? "blur(1px) grayscale(100%)" : ""};
  opacity: ${(props: SpinMaskInterface) => (props.spinning ? "0.7" : "1")};
`;

/**
 * Spin component.
 * Component for render spin.
 */
export default function Spin({ spinning, children }: SpinMaskInterface) {
  return (
    <SpinContent>
      <SpinContentMask spinning={spinning}>{children}</SpinContentMask>
      <SpinLoadingElement data-testid="spinnerElement" spinning={spinning} />
    </SpinContent>
  );
}
