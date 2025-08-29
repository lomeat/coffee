import { Container } from "../../styles/shared";
import { importImages } from "../../utils/importImages";
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

type Card = {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
};

const coffeeImages = importImages("coffee");

const cards: Card[] = coffeeImages.map((value, index) => ({
  id: index,
  title: `Ice Coffee ${index + 1}`,
  price: 350 + index * 3,
  imageUrl: value,
}));

export function Catalog() {
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
