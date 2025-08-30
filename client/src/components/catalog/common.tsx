import { useState } from "react";
import styled from "styled-components";
import { useAtomValue, useSetAtom } from "jotai";

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
import {
  coffeeCardsAtom,
  tagsAtom,
  type Card,
  type TagType,
} from "../../atoms/coffee.atom";
import { cartAtom } from "../../atoms/cart.atom";

export function Catalog() {
  const initCards = useAtomValue(coffeeCardsAtom);
  const [category, setCategory] = useState("all");
  const [cards, setCards] = useState(initCards);
  const setCart = useSetAtom(cartAtom);

  function pickCategory(type: TagType) {
    setCategory(type);
    setCards(() => {
      if (type === "all") {
        return initCards;
      }
      return initCards.filter((card) =>
        card.tags.map((t) => t.type).includes(type)
      );
    });
  }

  function addCoffee(card: Card) {
    setCart((state) => [
      ...state,
      { ...card, id: state.length ? state[state.length - 1].id + 1 : 1 },
    ]);
  }

  const tags = useAtomValue(tagsAtom);

  return (
    <Container>
      <CatalogNavBar>
        {tags.map((tag) => (
          <CatalogButton
            key={tag.id}
            $isActive={tag.type === category}
            onClick={() => pickCategory(tag.type)}
          >
            {tag.title}
          </CatalogButton>
        ))}
      </CatalogNavBar>
      <CardGrid>
        {cards.map((card) => (
          <CardContainer key={card.id}>
            <CardClickable>
              <OpenButton />
              <BuyButton onClick={() => addCoffee(card)} />
            </CardClickable>
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

const ButtonNoStyles = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  outline: none;
  width: inherit;
`;

const OpenButton = styled(ButtonNoStyles)`
  height: 70%;
`;

const BuyButton = styled(ButtonNoStyles)`
  height: 30%;
`;

const CardClickable = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: inherit;
  height: inherit;
  top: 0;
  left: 0;
  z-index: 3;
`;
