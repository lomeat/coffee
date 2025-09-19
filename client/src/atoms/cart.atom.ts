import { atom, createStore } from "jotai";
import { coffeeCardsAtom, type Card } from "./coffee.atom";

// Types

type Order = {
  time: string;
  payment: string;
};

// Mocks

export const orderTime: string[] = ["быстрее", "30 минут"];
export const payment: string[] = ["наличные", "картой на кассе"];
export const hours: string[] = Array.from(
  { length: 24 },
  (_, i) => `${i < 10 ? `0${i}` : i}:00`
);

// Atoms

const testBasketCards = createStore().get(coffeeCardsAtom);

export const cartAtom = atom<Card[]>([testBasketCards[0]]);

export const totalCartAtom = atom<number>((get) => {
  const cards = get(cartAtom);
  return cards.map((card) => card.price).reduce((prev, curr) => prev + curr, 0);
});

export const countCardAtom = atom((get) => {
  const cards = get(cartAtom);
  return cards.length;
});

export const orderAtom = atom<Order>({
  time: orderTime[0],
  payment: payment[0],
});

export const timeModalAtom = atom({
  isVisible: false,
  time: [...orderTime],
});
