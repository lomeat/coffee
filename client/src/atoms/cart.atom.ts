import { atom } from "jotai";
import { type Card } from "./coffee.atom";

export const cartAtom = atom<Card[]>([]);

export const totalCartAtom = atom<number>((get) => {
  const cards = get(cartAtom);
  return cards.map((card) => card.price).reduce((prev, curr) => prev + curr, 0);
});

export const countCardAtom = atom((get) => {
  const cards = get(cartAtom);
  return cards.length;
});
