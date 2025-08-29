import styled from "styled-components";

export const Flex = styled.div<{
  $isSpace?: boolean;
  $isColumn?: boolean;
  $gap?: number;
  $padding?: number;
}>`
  display: flex;
  justify-content: ${({ $isSpace }) =>
    $isSpace ? "space-between" : "flex-start"};
  flex-direction: ${({ $isColumn }) => ($isColumn ? "column" : "row")};
  gap: ${({ $gap }) => `${$gap}px`};
  padding: ${({ $padding }) => `${$padding}px`};
  align-items: center;
`;
