import { atom } from "jotai";
import type { Card } from "./coffee.atom";

type Desc = {
  isVisible: boolean;
  card: Card | null;
};

export const descriptionModalAtom = atom<Desc>({
  isVisible: false,
  card: null,
});
