import { atom } from "jotai";
import { ice, rist, blue, americano, caramel, matcha } from "../assets/coffee";

export type TagType = "classic" | "hot" | "new" | "cold" | "all";
export type TagTitle = "классика" | "новинки" | "горячие" | "холодные" | "все";

type Tag = {
  id: number;
  type: TagType;
  title: TagTitle;
};

type Card = {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
  tags: Tag[];
};

const tags: Tag[] = [
  { id: 0, type: "all", title: "все" },
  { id: 4, type: "new", title: "новинки" },
  { id: 1, type: "classic", title: "классика" },
  { id: 2, type: "cold", title: "холодные" },
  { id: 3, type: "hot", title: "горячие" },
];

export const tagsAtom = atom(tags);

function getTags(types: TagType[]): Tag[] {
  return tags.filter((tag) => types.includes(tag.type));
}

const coffeeCards: Card[] = [
  {
    id: 1,
    title: "Айс Латте",
    price: 350,
    imageUrl: ice,
    tags: getTags(["cold"]),
  },
  {
    id: 2,
    title: "Ристретто",
    price: 200,
    imageUrl: rist,
    tags: getTags(["cold", "new"]),
  },
  {
    id: 3,
    title: "Матча",
    price: 400,
    imageUrl: matcha,
    tags: getTags(["classic"]),
  },
  {
    id: 4,
    title: "Блу Матча",
    price: 450,
    imageUrl: blue,
    tags: getTags(["cold", "new"]),
  },
  {
    id: 5,
    title: "Карамельная бомба",
    price: 320,
    imageUrl: caramel,
    tags: getTags(["hot", "new"]),
  },
  {
    id: 6,
    title: "Американо",
    price: 150,
    imageUrl: americano,
    tags: getTags(["hot", "classic"]),
  },
];

export const coffeeCardsAtom = atom(coffeeCards);
