import { atom } from "jotai";
import { ice, rist, blue, americano, caramel, matcha } from "../assets/coffee";
import { descriptionModalAtom } from "./modal.atom";

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
};

export type Card = {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
  tags: Tag[];
  options: Option[];
  desc?: string;
  size: Size;
  details: Detail[];
};

export type Option = {
  title: string;
  subtitle: string;
  price: number;
};

export type MockVariant = {
  title: string;
  price: number;
};

export type MockOption = {
  title: string;
  items: MockVariant[];
};

export type Detail = {
  title: string;
  amount: number;
};

// --- Mocks ---

export const details: Detail[] = [
  { title: "Калории", amount: 250 },
  { title: "Белки", amount: 10.1 },
  { title: "Жиры", amount: 12.5 },
  { title: "Углеводы", amount: 20 },
];

export const options: MockOption[] = [
  {
    title: "сахар",
    items: [
      { title: "без сахара", price: 0 },
      { title: "с сахаром", price: 0 },
      { title: "бамбуковый", price: 0 },
    ],
  },
  {
    title: "молоко",
    items: [
      { title: "без молока", price: 0 },
      { title: "обычное", price: 0 },
      { title: "необычное", price: 100 },
      { title: "с блестками", price: 199 },
    ],
  },
  {
    title: "топпинг",
    items: [
      { title: "без топпинга", price: 0 },
      { title: "соленая карамель", price: 200 },
      { title: "пряный огурец", price: 50 },
      { title: "протухший сыр", price: 999 },
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

export const sizes: Size[] = [
  { title: "S", amount: 250, price: 0 },
  { title: "M", amount: 350, price: 100 },
  { title: "L", amount: 500, price: 150 },
];

const coffeeCards: Card[] = [
  {
    id: 1,
    title: "Айс Латте",
    price: 350,
    imageUrl: ice,
    tags: getTags(["cold"]),
    options: [
      { title: "сахар", subtitle: "с сахаром", price: 0 },
      { title: "молоко", subtitle: "обычное", price: 0 },
      { title: "топпинг", subtitle: "без топпинга", price: 0 },
    ],
    desc: "Просто латте. Но холодное",
    size: { title: "S", amount: 250, price: 0 },
    details,
  },
  {
    id: 2,
    title: "Ристретто",
    price: 200,
    imageUrl: rist,
    tags: getTags(["cold", "new"]),
    options: [
      { title: "сахар", subtitle: "с сахаром", price: 0 },
      { title: "молоко", subtitle: "обычное", price: 0 },
      { title: "топпинг", subtitle: "без топпинга", price: 0 },
    ],
    desc: "Какаято-то итальянская модная хрень. Но твоей даме нравится.",
    size: { title: "S", amount: 250, price: 0 },
    details,
  },
  {
    id: 3,
    title: "Матча",
    price: 400,
    imageUrl: matcha,
    tags: getTags(["classic"]),
    options: [
      { title: "сахар", subtitle: "с сахаром", price: 0 },
      { title: "молоко", subtitle: "обычное", price: 0 },
      { title: "топпинг", subtitle: "без топпинга", price: 0 },
    ],
    desc: "Кокосовая основа, вода питьевая, матча (зеленый чай) лед, взбитые сливки, печенье, может содержать картофельное пюре, баклажан",
    details,
    size: { title: "S", amount: 250, price: 0 },
  },
  {
    id: 4,
    title: "Блу Матча",
    price: 450,
    imageUrl: blue,
    tags: getTags(["cold", "new"]),
    options: [
      { title: "сахар", subtitle: "с сахаром", price: 0 },
      { title: "молоко", subtitle: "обычное", price: 0 },
      { title: "топпинг", subtitle: "без топпинга", price: 0 },
    ],
    desc: "Просто матча. Но голубая луна.",
    details,
    size: { title: "S", amount: 250, price: 0 },
  },
  {
    id: 5,
    title: "Карамельная бомба",
    price: 320,
    imageUrl: caramel,
    tags: getTags(["hot", "new"]),
    options: [
      { title: "сахар", subtitle: "с сахаром", price: 0 },
      { title: "молоко", subtitle: "обычное", price: 0 },
      { title: "топпинг", subtitle: "без топпинга", price: 0 },
    ],
    desc: "Просто бомба. Пушка бомба",
    details,
    size: { title: "S", amount: 250, price: 0 },
  },
  {
    id: 6,
    title: "Американо",
    price: 150,
    imageUrl: americano,
    tags: getTags(["hot", "classic"]),
    options: [
      { title: "сахар", subtitle: "с сахаром", price: 0 },
      { title: "молоко", subtitle: "обычное", price: 0 },
      { title: "топпинг", subtitle: "без топпинга", price: 0 },
    ],
    desc: "Do you speak english?",
    size: { title: "S", amount: 250, price: 0 },
    details,
  },
];

// --- Atoms ---

export const tagsAtom = atom(tags);

function getTags(types: TagType[]): Tag[] {
  return tags.filter((tag) => types.includes(tag.type));
}

export const coffeeCardsAtom = atom(coffeeCards);

// export const actualPriceAtom = atom((get) => {
//   const { card } = get(descriptionModalAtom);

//   if (!card) {
//     return 0;
//   }

//   const basePrice = card.price;

//   const optionsPrice = options
//     .map((option) =>
//       option.variants
//         .filter((variant) => variant.isActive)
//         .map((variant) => variant.price)
//     )
//     .flat()
//     .reduce((prev, curr) => prev + curr, 0);

//   const sizePrice = card.size.price;

//   const result = basePrice + optionsPrice + sizePrice;
//   return result;
// });
