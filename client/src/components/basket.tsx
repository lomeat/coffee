import { useState } from "react";
import styled from "styled-components";

import { Icon } from "../icon";
import { ChoosePlaceButton } from "./place-button";
import { Flex } from "../styles/shared";

export function Basket() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleModal() {
    setIsVisible((state) => !state);
  }

  return (
    <>
      <BasketButton onClick={toggleModal}>
        <Icon name="CartIcon" size={24} />
        <span>515 ₽</span>
      </BasketButton>

      <ModalWrapper $isVisible={isVisible}>
        <BasketWrapper>
          <Flex $isSpace>
            <h2 style={{ flex: "1 0 auto", textAlign: "center" }}>Корзина</h2>
            <Icon name="CrossIcon" type="button" onClick={toggleModal} />
          </Flex>
          <ChoosePlaceButton isArrow />
        </BasketWrapper>
      </ModalWrapper>
    </>
  );
}

const BasketWrapper = styled.div`
  background: ${(p) => p.theme.background.primary};
  border-radius: 20px 20px 0 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;

  h2 {
    ${(p) => p.theme.font.caption.large}
  }
`;

const ModalWrapper = styled.div<{ $isVisible?: boolean }>`
  display: ${(p) => (p.$isVisible ? "flex" : "none")};
  padding-top: 60px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const BasketButton = styled.button`
  ${(p) => p.theme.font.text.large}
  position: fixed;
  bottom: 40px;
  right: 20px;
  border: 0;
  border-radius: 15px;
  padding: 15px 25px;
  gap: 8px;
  color: ${(p) => p.theme.color.button};
  background: ${(p) => p.theme.background.accent};
  display: flex;
  z-index: 3;

  svg,
  path,
  span {
    color: inherit;
    stroke: currentColor;
  }
`;
