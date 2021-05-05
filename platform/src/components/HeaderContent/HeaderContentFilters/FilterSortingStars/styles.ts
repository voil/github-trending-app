import styled from "styled-components";

interface SortingColumnItemPropsInterface {
  readonly lineHeight?: number;
  readonly top?: number;
}

interface SortingStarsColumnsPropsInterface {
  readonly opacity?: number;
}

interface IconSortingInterface {
  readonly color?: string;
}

export const IconSorting = styled.div`
  width: 10px;
  transition: fill 0.5s ease;
  fill: ${(props: IconSortingInterface) => props.color};
`;

export const SortingStarsColumns = styled.div`
  display: flex;
  font-size: 14px;
  cursor: pointer;
  align-items: center;
  ${(props: SortingStarsColumnsPropsInterface) =>
    props.opacity ? `opacity: ${props.opacity};` : ``}
`;

export const SortingStarsColumnItem = styled.div`
  padding: 0px 5px;
  position: relative;
  ${(props: SortingColumnItemPropsInterface) =>
    props.lineHeight
      ? `
    line-height: ${props.lineHeight}px;
  `
      : ``}
  ${(props: SortingColumnItemPropsInterface) =>
    props.top
      ? `
    top: ${props.lineHeight}px;
  `
      : ``}
`;
