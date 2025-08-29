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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  gap: 20px;
`;

export const ContainerTitle = styled.h2`
  ${(p) => p.theme.font.caption.large}
  color: ${(p) => p.theme.color.primary};
  margin: 0;
  padding: 0;
`;
