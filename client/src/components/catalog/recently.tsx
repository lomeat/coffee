import { Container, ContainerTitle } from "../../styles/shared";
import { importImages } from "../../utils/importImages";
import {
  CardContainer,
  CardImg,
  CardInfoContainer,
  CardPrice,
  CardRow,
  CardTitle,
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
  title: `Wrong Tea ${index * 24}`,
  price: 350 + index * 3,
  imageUrl: value,
}));

export function CatalogRecently() {
  return (
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
  );
}
