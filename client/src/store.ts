import { atom } from "jotai";
import { importImages } from "./utils/importImages";

type Card = {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
  tags: string[];
};

const coffeeImages = importImages("coffee");

const coffee: Card[] = coffeeImages.map((value, index) => ({
  id: index,
  title: `Ice Coffee ${index + 1}`,
  price: 350 + index * 3,
  imageUrl: value,
  tags: ["new", "cold"],
}));

export const coffeeAtom = atom(coffee);
