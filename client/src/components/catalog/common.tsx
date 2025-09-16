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
  searchCardsAtom,
  tagsAtom,
  type Card,
  type TagType,
} from "../../atoms/coffee.atom";
import { cartAtom } from "../../atoms/cart.atom";
import { descriptionModalAtom } from "../../atoms/modal.atom";

interface Props {
  isSearching?: boolean;
}

export function Catalog({ isSearching }: Props) {
  const initCards = useAtomValue(coffeeCardsAtom);
  const [category, setCategory] = useState("all");
  const [cards, setCards] = useState(initCards);
  const setCart = useSetAtom(cartAtom);
  const setDesc = useSetAtom(descriptionModalAtom);
  const searchCards = useAtomValue(searchCardsAtom);

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

  function toggleDescModal(card: Card) {
    setDesc((state) => ({ isVisible: !state.isVisible, card }));
  }

  function addCoffee(card: Card) {
    setCart((state) => [
      ...state,
      { ...card, id: state.length ? state[state.length - 1].id + 1 : 1 },
    ]);
  }

  const tags = useAtomValue(tagsAtom);

  if (isSearching && !searchCards.length) {
    return (
      <Container>
        <h3>Нет кофеечков</h3>
      </Container>
    );
  }

  return (
    <Container>
      {!isSearching && (
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
      )}
      <CardGrid>
        {(isSearching ? searchCards : cards).map((card) => (
          <CardContainer key={card.id}>
            <CardClickable>
              <OpenButton onClick={() => toggleDescModal(card)} />
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
