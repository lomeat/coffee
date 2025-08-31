import { useState } from "react";
import styled from "styled-components";

import { Icon } from "../icon";
import { ChoosePlaceButton } from "./place-button";
import { useAtom, useAtomValue } from "jotai";
import { cartAtom, countCardAtom, totalCartAtom } from "../atoms/cart.atom";
import { Flex } from "../styles/shared";

export function Basket() {
  const [isVisible, setIsVisible] = useState(false);
  const [cart, setCart] = useAtom(cartAtom);
  const total = useAtomValue(totalCartAtom);
  const count = useAtomValue(countCardAtom);

  function toggleModal() {
    setIsVisible((state) => !state);
  }

  function removeCoffee(id: number) {
    setCart((state) => state.filter((a) => a.id !== id));
  }

  return (
    <>
      <BasketButton onClick={toggleModal}>
        {!!count && <Badge>{count}</Badge>}
        <Icon name="CartIcon" size={24} />
        <span>{total} ₽</span>
      </BasketButton>

      <ModalWrapper $isVisible={isVisible}>
        <BasketWrapper>
          <Header>
            <BasketTitle>Корзина</BasketTitle>
            <Icon name="CrossIcon" type="button" onClick={toggleModal} />
          </Header>

          <div
            style={{ gap: "20px", display: "flex", flexDirection: "column" }}
          >
            <ChoosePlaceButton isArrow />
            <List>
              {cart.map((coffee) => (
                <Card key={coffee.id}>
                  <Image style={{ width: "100px" }} src={coffee.imageUrl} />
                  <Flex $isColumn>
                    <Title>{coffee.title}</Title>
                    <Title>{coffee.price} ₽</Title>
                  </Flex>
                  <DeleteButton onClick={() => removeCoffee(coffee.id)}>
                    <Icon name="CrossIcon" />
                  </DeleteButton>
                </Card>
              ))}
            </List>
          </div>
          <div>
            <Button>Оплатить {total} ₽</Button>
          </div>
        </BasketWrapper>
      </ModalWrapper>
    </>
  );
}

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 85px;
  height: 100px;
`;

const Title = styled.span`
  ${(p) => p.theme.font.text.medium};
  color: ${(p) => p.theme.color.primary};
`;

const DeleteButton = styled.button`
  border: 0;
  background: ${(p) => p.theme.background.secondary};
  padding: 10px;
  border-radius: 10px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

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

const Badge = styled.div`
  position: absolute;
  top: -10px;
  right: -5px;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  color: white;
`;
