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
import {
  coffeeCardsAtom,
  tagsAtom,
  type TagType,
} from "../../atoms/coffee.atom";
import { useState } from "react";

export function Catalog() {
  const initCards = useAtomValue(coffeeCardsAtom);
  const [category, setCategory] = useState("all");
  const [cards, setCards] = useState(initCards);

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
