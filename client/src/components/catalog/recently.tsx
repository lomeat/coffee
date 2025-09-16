import { useAtomValue, useSetAtom } from "jotai";
import { Container, ContainerTitle } from "../../styles/shared";
import {
  CardContainer,
  CardImg,
  CardInfoContainer,
  CardPrice,
  CardRow,
  CardTitle,
} from "./shared";
import { recentlyCardsAtom } from "../../atoms/recently.atom";
import type { Card } from "../../atoms/coffee.atom";
import { cartAtom } from "../../atoms/cart.atom";

export function CatalogRecently() {
  const cards = useAtomValue(recentlyCardsAtom);
  const setCart = useSetAtom(cartAtom);

  if (!cards.length) {
    return null;
  }

  function addCoffee(card: Card) {
    setCart((state) => [
      ...state,
      { ...card, id: state.length ? state[state.length - 1].id + 1 : 1 },
    ]);
  }

  return (
    <Container>
      <ContainerTitle>недавнее</ContainerTitle>
      <CardRow>
        {cards.map((card) => (
          <CardContainer key={card.id} $isSmall onClick={() => addCoffee(card)}>
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
