import { useState } from "react";
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
  searchValueAtom,
  tagsAtom,
  type Card,
  type TagType,
} from "../../atoms/coffee.atom";
import { descriptionModalAtom } from "../../atoms/modal.atom";

export function Catalog() {
  const initCards = useAtomValue(coffeeCardsAtom);
  const [category, setCategory] = useState("all");
  const [cards, setCards] = useState(initCards);
  const setDesc = useSetAtom(descriptionModalAtom);
  const searchCards = useAtomValue(searchCardsAtom);
  const isSearching = !!useAtomValue(searchValueAtom);

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
          <CardContainer key={card.id} onClick={() => toggleDescModal(card)}>
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
