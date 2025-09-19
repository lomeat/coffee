import { useContext } from "react";

import { ThemeContext } from "../styles/context";
import { Flex } from "../styles/shared";
import { Icon } from "../icon";
import { ChoosePlaceButton } from "./place-button";
import { Search } from "../ui/search";
import { useAtom } from "jotai";
import { searchValueAtom } from "../atoms/coffee.atom";
import { ChooseCafe } from "./choose-cafe/choose-cafe";

export function Header() {
  const toggleTheme = useContext(ThemeContext);
  const [search, setSearch] = useAtom(searchValueAtom);

  return (
    <>
      <Flex $isColumn $gap={10} $padding={20}>
        <Flex $isSpace>
          <ChoosePlaceButton />
          <Flex $gap={10}>
            <Icon name="CloudIcon" type="button" onClick={toggleTheme} />
            <Icon name="ProfileIcon" type="button" />
          </Flex>
        </Flex>
        <Search value={search} setValue={setSearch} />
      </Flex>
      <ChooseCafe />
    </>
  );
}
