import { atom } from "jotai";
import { importImages } from "../utils/importImages";
import { ice, rist, blue, americano, caramel, matcha } from "../assets/coffee";

type Tag = "classic" | "hot" | "new" | "cold";

type Card = {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
  tags: Tag[];
};

const coffeeImages = importImages("coffee");

const oldCoffeeCards: Card[] = coffeeImages.map((value, index) => ({
  id: index,
  title: `Ice Coffee ${index + 1}`,
  price: 350 + index * 3,
  imageUrl: value,
  tags: ["new", "cold"],
}));

export const oldCoffeeCardsAtom = atom(oldCoffeeCards);

const coffeeCards: Card[] = [
  {
    id: 1,
    title: "Айс Латте",
    price: 350,
    imageUrl: ice,
    tags: ["cold"],
  },
  {
    id: 2,
    title: "Ристретто",
    price: 200,
    imageUrl: rist,
    tags: ["new", "cold"],
  },
  {
    id: 3,
    title: "Матча",
    price: 400,
    imageUrl: matcha,
    tags: ["classic"],
  },
  {
    id: 4,
    title: "Блу Матча",
    price: 450,
    imageUrl: blue,
    tags: ["new", "cold"],
  },
  {
    id: 5,
    title: "Карамельная бомба",
    price: 320,
    imageUrl: caramel,
    tags: ["hot", "new"],
  },
  {
    id: 6,
    title: "Американо",
    price: 150,
    imageUrl: americano,
    tags: ["classic", "hot"],
  },
];

export const coffeeCardsAtom = atom(coffeeCards);

export function getCoffeeCardsAtom(tag?: Tag) {
  if (!tag) {
    return coffeeCardsAtom;
  }

  return atom((get) => {
    const cards = get(coffeeCardsAtom);
    return cards.filter((card) => card.tags.includes(tag));
  });
}
