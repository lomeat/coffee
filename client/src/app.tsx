import styled from "styled-components";

import { Icon } from "./icon";
import { importImages } from "./utils/importImages";

type Card = {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
};

const coffeeImages = importImages("coffee");
const promoImages = importImages("promo");

const cards: Card[] = coffeeImages.map((value, index) => ({
  id: index,
  title: `Ice Coffee ${index + 1}`,
  price: 350 + index * 3,
  imageUrl: value,
}));

export function App() {
  return (
    <Wrapper>
      <Header>
        <Flex $isSpace>
          <Flex $gap={10}>
            <HeaderButton>
              <Icon name="MapIcon" />
            </HeaderButton>
            <HeaderSpan>Выбрать кофейню</HeaderSpan>
          </Flex>
          <HeaderButton>
            <Icon name="ProfileIcon" />
          </HeaderButton>
        </Flex>
        <HeaderSearch placeholder="найди свой напиток" />
      </Header>

      <Container>
        <ContainerTitle>недавнее</ContainerTitle>
        <CardRow>
          {cards.map((card) => (
            <CardContainer key={card.id} $isSmall>
              <CardInfoContainer>
                <CardTitle $isSmall>{card.title}</CardTitle>
                <CardPrice $isSmall>{card.price} ₽</CardPrice>
              </CardInfoContainer>
              <CardImg src={card.imageUrl} />
            </CardContainer>
          ))}
        </CardRow>
      </Container>

      <Container>
        <img src={promoImages[0]} />
      </Container>

      <Container>
        <CatalogNavBar>
          <CatalogButton>все</CatalogButton>
          <CatalogButton $isActive>новинки</CatalogButton>
          <CatalogButton>сезонное</CatalogButton>
          <CatalogButton>холодное</CatalogButton>
          <CatalogButton>соленое</CatalogButton>
          <CatalogButton>квадратное</CatalogButton>
        </CatalogNavBar>
        <CardGrid>
          {cards.map((card) => (
            <CardContainer key={card.id}>
              <CardInfoContainer>
                <CardTitle>{card.title}</CardTitle>
                <CardPrice>{card.price} ₽</CardPrice>
              </CardInfoContainer>
              <CardImg src={card.imageUrl} />
            </CardContainer>
          ))}
        </CardGrid>
      </Container>
    </Wrapper>
  );
}

const CardRow = styled.div`
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const CardContainer = styled.button<{ $isSmall?: boolean }>`
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

const CardImg = styled.img`
  position: absolute;
  top: 20px;
  left: 0px;
  width: inherit;
  height: inherit;
`;

const CardInfoContainer = styled.div`
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

const CardTitle = styled.span<{ $isSmall?: boolean }>`
  ${(p) =>
    p.$isSmall ? p.theme.font.caption.small : p.theme.font.caption.large}
  color: ${(p) => p.theme.color.primary};
`;

const CardPrice = styled.span<{ $isSmall?: boolean }>`
  ${(p) => (p.$isSmall ? p.theme.font.text.small : p.theme.font.text.medium)}
  color: ${(p) => p.theme.color.accent};
  padding: 6px 10px;
  border-radius: 30px;
  background: ${(p) => p.theme.background.primary};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: #f1f5fd; */
  background: #fffef8;
  gap: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  gap: 20px;
`;

const ContainerTitle = styled.h2`
  ${(p) => p.theme.font.caption.large}
  margin: 0;
  padding: 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  /* background: #fffef8; */
  /* border-radius: 0 0 20px 20px; */
`;

const Flex = styled.div<{
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

const HeaderButton = styled.button`
  border: 0;
  border-radius: 100%;
  background: rgba(64, 40, 36, 0.05);
  width: 35px;
  height: 35px;
`;

const HeaderSearch = styled.input`
  border-radius: 15px;
  padding: 15px;
  background: rgba(64, 40, 36, 0.05);
  border: 1px solid transparent;
  outline: none;

  &::placeholder {
    color: rgba(64, 40, 36, 0.45);
  }

  &:focus {
    color: ${(p) => p.theme.color.primary};
    border: 1px solid rgba(64, 40, 36, 0.45);
    background: ${(p) => p.theme.background.primary};
  }
`;

const HeaderSpan = styled.span`
  ${({ theme }) => theme.font.text.large}
`;

const CatalogNavBar = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CatalogButton = styled.button<{ $isActive?: boolean }>`
  flex: 0 0 auto;
  border: 0;
  background: transparent;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.primary : theme.color.secondary};
  ${({ theme }) => theme.font.caption.large};
`;
