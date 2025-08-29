import { useAtomValue } from "jotai";
import { Container, ContainerTitle } from "../../styles/shared";
import {
  CardContainer,
  CardImg,
  CardInfoContainer,
  CardPrice,
  CardRow,
  CardTitle,
} from "./shared";
import { coffeeAtom } from "../../store";

export function CatalogRecently() {
  const cards = useAtomValue(coffeeAtom);

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
