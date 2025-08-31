import { atom } from "jotai";
import { ice, rist, blue, americano, caramel, matcha } from "../assets/coffee";
import { descriptionModalAtom } from "./modal";

// --- Types ---

export type TagType = "classic" | "hot" | "new" | "cold" | "all";
export type TagTitle = "классика" | "новинки" | "горячие" | "холодные" | "все";

export type Tag = {
  id: number;
  type: TagType;
  title: TagTitle;
};

export type Size = {
  title: string;
  amount: number;
  price: number;
  isActive: boolean;
};

export type Card = {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
  tags: Tag[];
  options: Option[];
  desc?: string;
  sizes: Size[];
  details: Detail[];
};

type Variant = {
  title: string;
  price: number;
  isActive: boolean;
};

export type Option = {
  title: string;
  variants: Variant[];
};

export type Detail = {
  title: string;
  amount: number;
};

// --- Mocks ---

const details: Detail[] = [
  { title: "Калории", amount: 250 },
  { title: "Белки", amount: 10.1 },
  { title: "Жиры", amount: 12.5 },
  { title: "Углеводы", amount: 20 },
];

const options: Option[] = [
  {
    title: "сахар",
    variants: [
      { title: "без сахара", price: 0, isActive: false },
      { title: "с сахаром", price: 0, isActive: true },
      { title: "бамбуковый", price: 0, isActive: false },
    ],
  },
  {
    title: "молоко",
    variants: [
      { title: "без молока", price: 0, isActive: false },
      { title: "обычное", price: 0, isActive: true },
      { title: "необычное", price: 100, isActive: false },
      { title: "с блестками", price: 199, isActive: false },
    ],
  },
  {
    title: "топпинги",
    variants: [
      { title: "без топпинга", price: 0, isActive: true },
      { title: "соленая карамель", price: 200, isActive: false },
      { title: "пряный огурец", price: 50, isActive: false },
      { title: "протухший сыр", price: 999, isActive: false },
    ],
  },
];

const tags: Tag[] = [
  { id: 0, type: "all", title: "все" },
  { id: 4, type: "new", title: "новинки" },
  { id: 1, type: "classic", title: "классика" },
  { id: 2, type: "cold", title: "холодные" },
  { id: 3, type: "hot", title: "горячие" },
];

const sizes: Size[] = [
  { title: "S", amount: 250, price: 0, isActive: true },
  { title: "M", amount: 350, price: 100, isActive: true },
  { title: "L", amount: 500, price: 150, isActive: true },
];

const coffeeCards: Card[] = [
  {
    id: 1,
    title: "Айс Латте",
    price: 350,
    imageUrl: ice,
    tags: getTags(["cold"]),
    options,
    desc: "Просто латте. Но холодное",
    sizes,
    details,
  },
  {
    id: 2,
    title: "Ристретто",
    price: 200,
    imageUrl: rist,
    tags: getTags(["cold", "new"]),
    options,
    desc: "Какаято-то итальянская модная хрень. Но твоей даме нравится.",
    sizes,
    details,
  },
  {
    id: 3,
    title: "Матча",
    price: 400,
    imageUrl: matcha,
    tags: getTags(["classic"]),
    options,
    desc: "Кокосовая основа, вода питьевая, матча (зеленый чай) лед, взбитые сливки, печенье, может содержать картофельное пюре, баклажан",
    details,
    sizes,
  },
  {
    id: 4,
    title: "Блу Матча",
    price: 450,
    imageUrl: blue,
    tags: getTags(["cold", "new"]),
    options,
    desc: "Просто матча. Но голубая луна.",
    details,
    sizes,
  },
  {
    id: 5,
    title: "Карамельная бомба",
    price: 320,
    imageUrl: caramel,
    tags: getTags(["hot", "new"]),
    options,
    desc: "Просто бомба. Пушка бомба",
    details,
    sizes,
  },
  {
    id: 6,
    title: "Американо",
    price: 150,
    imageUrl: americano,
    tags: getTags(["hot", "classic"]),
    options,
    desc: "Do you speak english?",
    sizes,
    details,
  },
];

// --- Atoms ---

export const tagsAtom = atom(tags);

function getTags(types: TagType[]): Tag[] {
  return tags.filter((tag) => types.includes(tag.type));
}

export const coffeeCardsAtom = atom(coffeeCards);

export const actualPriceAtom = atom((get) => {
  const { card } = get(descriptionModalAtom);

  if (!card) {
    return 0;
  }

  const basePrice = card.price;

  const optionsPrice = options
    .map((option) =>
      option.variants
        .filter((variant) => variant.isActive)
        .map((variant) => variant.price)
    )
    .flat()
    .reduce((prev, curr) => prev + curr, 0);

  const sizePrice = card.sizes.filter((s) => s.isActive)[0].price;

  const result = basePrice + optionsPrice + sizePrice;
  return result;
});
