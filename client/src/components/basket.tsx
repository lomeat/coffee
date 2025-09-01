import { useState } from "react";
import styled from "styled-components";

import { Icon } from "../icon";
import { ChoosePlaceButton } from "./place-button";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { cartAtom, countCardAtom, totalCartAtom } from "../atoms/cart.atom";
import { ContainerTitle, Flex } from "../styles/shared";
import { descriptionModalAtom } from "../atoms/modal.atom";
import type { Card } from "../atoms/coffee.atom";
import { recentlyCardsAtom } from "../atoms/recently.atom";

export function Basket() {
  const [isVisible, setIsVisible] = useState(false);
  const [cart, setCart] = useAtom(cartAtom);
  const total = useAtomValue(totalCartAtom);
  const count = useAtomValue(countCardAtom);
  const setDescCard = useSetAtom(descriptionModalAtom);
  const setRecently = useSetAtom(recentlyCardsAtom);

  function toggleModal() {
    setIsVisible((state) => !state);
  }

  function removeCoffee(id: number) {
    setCart((state) => state.filter((a) => a.id !== id));
  }

  function addCoffee(coffee: Card) {
    setCart((state) => [
      ...state,
      { ...coffee, id: state.length ? state[state.length - 1].id + 1 : 0 },
    ]);
  }

  function pay() {
    setCart([]);
    toggleModal();

    const unique = new Set(cart.map((c) => c.title));
    const recently = [...unique]
      .map((u) => cart.find((c) => c.title === u) || "empty")
      .filter((a) => a !== "empty");

    console.log([...unique]);

    setRecently(recently);
  }

  return (
    <>
      {!!cart.length && (
        <BasketButton onClick={toggleModal}>
          {!!count && <Badge>{count}</Badge>}
          <Icon name="CartIcon" size={24} />
          <span>{total} ₽</span>
        </BasketButton>
      )}

      <ModalWrapper $isVisible={isVisible}>
        <BasketWrapper>
          <Header>
            <BasketTitle>Корзина</BasketTitle>
            <Icon name="CrossIcon" type="button" onClick={toggleModal} />
          </Header>
          <Container>
            <ChoosePlaceButton isArrow />
          </Container>

          <ScrollContainer>
            <Container>
              {cart.map((coffee) => (
                <CardWrapper key={coffee.id}>
                  <OpenDescModal
                    onClick={() =>
                      setDescCard({ isVisible: true, card: coffee })
                    }
                  >
                    {coffee.imageUrl && <Image $imageUrl={coffee.imageUrl} />}
                    <CoffeeDesc>
                      <Title>{coffee.title}</Title>
                      <SubTitle>{coffee.size.amount} мл</SubTitle>
                      <Options>
                        + {coffee.options.map((opt) => opt.subtitle).join(", ")}
                      </Options>
                    </CoffeeDesc>
                  </OpenDescModal>
                  <Flex $isColumn style={{ height: "100%" }} $gap={10}>
                    <Price>{coffee.price} ₽</Price>
                    <Flex $gap={10}>
                      <CoffeeButton onClick={() => addCoffee(coffee)}>
                        <Icon name="PlusIcon" />
                      </CoffeeButton>
                      <CoffeeButton onClick={() => removeCoffee(coffee.id)}>
                        <Icon name="CrossIcon" />
                      </CoffeeButton>
                    </Flex>
                  </Flex>
                </CardWrapper>
              ))}
            </Container>
          </ScrollContainer>
          <FixedContainer>
            <Flex $gap={10} $isColumn>
              <ContainerTitle>время выдачи</ContainerTitle>
              <SelectButton>
                <Flex $gap={10}>
                  <Icon name="TimeIcon" />
                  <span>15 минут</span>
                </Flex>
                <Icon name="ArrowDownIcon" rotate={270} />
              </SelectButton>
            </Flex>
            <Flex $gap={10} $isColumn>
              <ContainerTitle>способ оплаты</ContainerTitle>
              <SelectButton>
                <Flex $gap={10}>
                  <Icon name="PaymentCashIcon" />
                  <span>наличные</span>
                </Flex>
                <Icon name="ArrowDownIcon" rotate={270} />
              </SelectButton>
            </Flex>
            <Button onClick={pay}>Оплатить {total} ₽</Button>
          </FixedContainer>
        </BasketWrapper>
      </ModalWrapper>
    </>
  );
}

const SelectButton = styled.button`
  padding: 15px;
  border-radius: 15px;
  ${(p) => p.theme.font.text.large}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CoffeeDesc = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  max-width: 150px;
`;

const Price = styled.span`
  width: 100%;
  text-align: right;
  color: ${(p) => p.theme.color.accent};
  ${(p) => p.theme.font.text.medium}
`;

const OpenDescModal = styled.div<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>`
  display: flex;
  gap: 10px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
`;

const Image = styled.div<{ $imageUrl: string }>`
  width: 85px;
  height: 100px;
  background: ${(p) => p.theme.background.secondary};
  border-radius: 10px;
  background-image: url(${(p) => p.$imageUrl});
  background-size: contain;
  background-position-y: 25px;
  background-repeat: no-repeat;
`;

const Title = styled.span`
  ${(p) => p.theme.font.text.medium};
  color: ${(p) => p.theme.color.primary};
`;

const SubTitle = styled.span`
  ${(p) => p.theme.font.desc};
  color: ${(p) => p.theme.color.primary};
`;

const Options = styled.span`
  ${(p) => p.theme.font.desc};
  color: ${(p) => p.theme.color.secondary};
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CoffeeButton = styled.button`
  border: 0;
  background: ${(p) => p.theme.background.secondary};
  padding: 10px;
  border-radius: 10px;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-bottom: 300px;
`;

const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${(p) => p.theme.background.primary};

  &:last-child {
    padding-bottom: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  justify-self: flex-end;
  align-self: flex-end;

  &:active {
    background: #000;
  }
`;

const FixedContainer = styled(Container)`
  position: fixed;
  bottom: 0;
  left: 0;
  gap: 20px;
`;

const BasketWrapper = styled.div`
  background: ${(p) => p.theme.background.primary};
  position: relative;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
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
