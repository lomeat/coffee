import { atom } from "jotai";
import type { Card } from "./coffee.atom";

export const recentlyCardsAtom = atom<Card[]>([]);
