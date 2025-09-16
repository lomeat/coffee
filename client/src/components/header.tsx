import { useContext } from "react";

import { ThemeContext } from "../styles/context";
import { Flex } from "../styles/shared";
import { Icon } from "../icon";
import { ChoosePlaceButton } from "./place-button";
import { Search } from "../ui/search";
import { useAtomValue, useSetAtom, type SetStateAction } from "jotai";
import { coffeeCardsAtom, searchCardsAtom } from "../atoms/coffee.atom";

type Props = {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
};

export function Header({ search, setSearch }: Props) {
  const toggleTheme = useContext(ThemeContext);

  const setCards = useSetAtom(searchCardsAtom);
  const coffeeCards = useAtomValue(coffeeCardsAtom);

  function handleSubmit() {
    setCards(
      coffeeCards.filter((card) =>
        card.title.toLowerCase().trim().includes(search.trim().toLowerCase())
      )
    );
  }

  return (
    <Flex $isColumn $gap={10} $padding={20}>
      <Flex $isSpace>
        <ChoosePlaceButton />
        <Flex $gap={10}>
          <Icon name="CloudIcon" type="button" onClick={toggleTheme} />
          <Icon name="ProfileIcon" type="button" />
        </Flex>
      </Flex>
      <Search
        value={search}
        setValue={setSearch}
        isReactive
        onSubmit={handleSubmit}
      />
    </Flex>
  );
}
