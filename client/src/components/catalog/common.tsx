import { useAtomValue } from "jotai";
import { Container } from "../../styles/shared";
import {
  CardContainer,
  CardGrid,
  CardImg,
  CardInfoContainer,
  CardPrice,
  CardTitle,
  CatalogButton,
  CatalogNavBar,
} from "./shared";
import { coffeeCardsAtom } from "../../atoms/coffee.atom";

export function Catalog() {
  const cards = useAtomValue(coffeeCardsAtom);

  return (
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
  );
}
