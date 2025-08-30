import styled from "styled-components";

export const CardRow = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto; /* или scroll */
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

export const CardContainer = styled.button<{ $isSmall?: boolean }>`
  flex: 0 0 auto;
  background: ${(p) => p.theme.background.secondary};
  width: ${(p) => (p.$isSmall ? 100 : 170)}px;
  height: ${(p) => (p.$isSmall ? 120 : 170)}px;
  border-radius: ${(p) => (p.$isSmall ? 10 : 15)}px;
  display: flex;
  position: relative;
  border: 0;
  outline: none;
  overflow: hidden;
`;

export const CardImg = styled.img`
  position: absolute;
  top: 20px;
  left: 0px;
  width: inherit;
  height: inherit;
`;

export const CardInfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

export const CardTitle = styled.span<{ $isSmall?: boolean }>`
  ${(p) =>
    p.$isSmall ? p.theme.font.caption.small : p.theme.font.caption.large}
  color: ${(p) => p.theme.color.primary};
  max-width: 90%;
  overflow-wrap: break-word;
`;

export const CardPrice = styled.span<{ $isSmall?: boolean }>`
  ${(p) => (p.$isSmall ? p.theme.font.text.small : p.theme.font.text.medium)}
  color: ${(p) => p.theme.color.accent};
  padding: 6px 10px;
  border-radius: 30px;
  background: ${(p) => p.theme.background.primary};
`;

export const CatalogNavBar = styled.div`
  display: flex;
  gap: 6px;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CatalogButton = styled.button<{ $isActive?: boolean }>`
  flex: 0 0 auto;
  border: 0;
  background: transparent;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.primary : theme.color.secondary};
  ${({ theme }) => theme.font.caption.large};
`;
