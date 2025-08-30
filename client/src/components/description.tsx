import styled from "styled-components";

import { Icon } from "../icon";

// import { Flex } from "../styles/shared";
import { useAtom, useSetAtom } from "jotai";
import { descriptionModalAtom } from "../atoms/modal";
import type { Card } from "../atoms/coffee.atom";
import { cartAtom } from "../atoms/cart.atom";

export function DescriptionCard() {
  const [desc, setDesc] = useAtom(descriptionModalAtom);
  const setCart = useSetAtom(cartAtom);

  function addCoffee(card: Card) {
    setCart((state) => [
      ...state,
      { ...card, id: state.length ? state[state.length - 1].id + 1 : 1 },
    ]);
  }
  function toggleModal() {
    setDesc((state) => ({ ...state, isVisible: !state.isVisible }));
  }

  return (
    <ModalWrapper $isVisible={desc?.isVisible}>
      <BasketWrapper>
        <Header>
          <BasketTitle>Корзина</BasketTitle>
          <Icon name="CrossIcon" type="button" onClick={toggleModal} />
        </Header>
        <div>
          <h2>{desc.card?.title}</h2>
          <img src={desc.card?.imageUrl} />
        </div>
        <Button onClick={() => (desc.card ? addCoffee(desc.card) : undefined)}>
          + {desc.card?.price}
        </Button>
      </BasketWrapper>
    </ModalWrapper>
  );
}

const Header = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  background: ${(p) => p.theme.background.primary};
`;

const Button = styled.button`
  border: 0;
  ${(p) => p.theme.font.text.large}
  color: ${(p) => p.theme.color.button};
  background: ${(p) => p.theme.background.accent};
  border-radius: 15px;
  width: 100%;
  padding: 15px;
`;

const BasketWrapper = styled.div`
  background: ${(p) => p.theme.background.primary};
  position: relative;
  border-radius: 20px 20px 0 0;
  padding: 70px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 20px;
  overflow-y: scroll;
`;

const BasketTitle = styled.h2`
  ${(p) => p.theme.font.text.large}
  text-align: center;
  width: 100%;
`;

const ModalWrapper = styled.div<{ $isVisible?: boolean }>`
  display: ${(p) => (p.$isVisible ? "flex" : "none")};
  padding-top: 60px;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;
