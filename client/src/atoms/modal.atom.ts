import { atom, createStore } from "jotai";
import type { Card } from "./coffee.atom";

type Desc = {
  isVisible: boolean;
  card: Card | null;
};

export const descriptionModalAtom = atom<Desc>({
  isVisible: false,
  card: null,
});

const isVisible = {
  desc: false,
  cafe: false,
};

export const isVisibleAtom = atom<Record<string, boolean>>(isVisible);

export function changeIsVisible(key: keyof typeof isVisible, value: boolean) {
  const store = createStore();
  const values = store.get(isVisibleAtom);
  const newValues = { ...values, [key]: value };
  store.set(isVisibleAtom, newValues);
}

export function getIsVisible(key: keyof typeof isVisible) {
  const tempAtom = atom((get) => {
    const value = get(isVisibleAtom);
    return value[key];
  });
  return createStore().get(tempAtom);
}
