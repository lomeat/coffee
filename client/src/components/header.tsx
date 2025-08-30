import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../styles/context";
import { Flex } from "../styles/shared";
import { Icon } from "../icon";
import { ChoosePlaceButton } from "./place-button";

export function Header() {
  const toggleTheme = useContext(ThemeContext);

  return (
    <Wrapper>
      <Flex $isSpace>
        <ChoosePlaceButton />
        <Flex $gap={10}>
          <Icon name="CloudIcon" type="button" onClick={toggleTheme} />
          <Icon name="ProfileIcon" type="button" />
        </Flex>
      </Flex>
      <HeaderSearch placeholder="найди свой напиток" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  background: ${(p) => p.theme.background.primary};
`;

const HeaderSearch = styled.input`
  border-radius: 15px;
  padding: 15px;
  background: ${(p) => p.theme.background.button};
  border: 1px solid transparent;
  outline: none;

  &::placeholder {
    color: ${(p) => p.theme.color.secondary};
  }

  &:focus {
    color: ${(p) => p.theme.color.primary};
    border: 1px solid rgba(64, 40, 36, 0.45);
    background: ${(p) => p.theme.background.primary};
  }
`;
