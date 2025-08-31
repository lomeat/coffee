import styled from "styled-components";

import { Icon } from "../icon";

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { descriptionModalAtom } from "../atoms/modal.atom";
import {
  actualPriceAtom,
  sizes,
  type Card,
  type Size,
} from "../atoms/coffee.atom";
import { cartAtom } from "../atoms/cart.atom";
import { useEffect, useState } from "react";
import { ContainerTitle } from "../styles/shared";

const options = [
  {
    title: "сахар",
    children: [
      {
        title: "без сахара",
        isActive: false,
      },
      {
        title: "с сахаром",
        isActive: true,
      },
      {
        title: "бамбуковый",
        isActive: false,
      },
    ],
  },
  {
    title: "молоко",
    children: [
      {
        title: "обычное",
        isActive: true,
      },
      {
        title: "необычное",
        isActive: false,
      },
      {
        title: "с блестками",
        isActive: false,
      },
    ],
  },
];

export function DescriptionCard() {
  const [desc, setDesc] = useAtom(descriptionModalAtom);
  const setCart = useSetAtom(cartAtom);
  const [size, setSize] = useState<Size>(sizes[0]);
  const [price, setPrice] = useState<number>(Number(desc.card?.price));

  const initPrice = Number(desc.card?.price);

  useEffect(() => {
    setPrice(initPrice + size.price);
  }, [initPrice, size]);

  function addCoffee(card: Card) {
    setCart((state) => [
      ...state,
      { ...card, id: state.length ? state[state.length - 1].id + 1 : 1 },
    ]);
  }

  function toggleModal() {
    setDesc((state) => ({ ...state, isVisible: !state.isVisible }));
  }

  function changeSize(newSize: Size) {
    setSize(newSize);
    setDesc((desc) => ({
      ...desc,
      card: desc.card ? { ...desc.card, size } : desc.card,
    }));
  }

  if (!desc.card) {
    console.error("NO DESC CARD");
    return null;
  }

  return (
    <ModalWrapper $isVisible={desc?.isVisible}>
      <Wrapper $src={desc.card?.imageUrl}>
        <Header>
          <Title>{desc.card?.title}</Title>
          <Icon name="CrossIcon" type="button" onClick={toggleModal} />
        </Header>
        <Gradient>
          {!!desc.card?.desc && <Text>{desc.card?.desc}</Text>}
        </Gradient>
        {!!desc.card && (
          <Container style={{ paddingTop: 20 }}>
            <SizeWrapper>
              {sizes.map((button) => (
                <SizeButton
                  key={button.title}
                  onClick={() => changeSize(button)}
                  $isActive={size.title === button.title}
                >
                  <h3>{button.title}</h3>
                  <span>{button.amount} мл</span>
                </SizeButton>
              ))}
            </SizeWrapper>
          </Container>
        )}
        <Container>
          <OptionsWrapper>
            {options.map((option) => (
              <Option>
                <ContainerTitle>{option.title}</ContainerTitle>
                <OptsWrapper>
                  {option.children.map((opt) => (
                    <Opt htmlFor={opt.title}>
                      <span>{opt.title}</span>
                      <input
                        type="radio"
                        checked={opt.isActive}
                        id={opt.title}
                        name={opt.title}
                      />
                    </Opt>
                  ))}
                </OptsWrapper>
              </Option>
            ))}
          </OptionsWrapper>
        </Container>
        <Container>
          <ContainerTitle>состав</ContainerTitle>
          <Text>
            Кофейная основа (3 в 1), вода питьевая, лед, взбитые сливки,
            печенье, может содержать картофельное пюре, баклажан
          </Text>
        </Container>
        <Container>
          <SizeWrapper>
            {desc.card.details.map((detail) => (
              <SizeButton disabled $isSmall>
                <span>{detail.title}</span>
                <h3>{detail.amount}</h3>
              </SizeButton>
            ))}
          </SizeWrapper>
        </Container>
        <Container>
          <Button
            onClick={() =>
              desc.card ? addCoffee({ ...desc.card, price: price }) : undefined
            }
          >
            Купить {price} ₽
          </Button>
        </Container>
      </Wrapper>
    </ModalWrapper>
  );
}

const Opt = styled.label`
  display: flex;
  justify-content: space-between;
`;

const OptsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  &:not(:first-child) {
    padding-top: 20px;
  }

  &:not(:last-child) {
    padding-bottom: 20px;
    border-bottom: 2px solid ${(p) => p.theme.background.button};
  }
`;

const SizeWrapper = styled.div`
  width: 100%;
  background: ${(p) => p.theme.background.button};
  border-radius: 15px;
  height: 60px;
  padding: 2px;
  display: flex;
`;

const Text = styled.span`
  ${(p) => p.theme.font.text.medium}
  line-height: 20px;
  font-weight: 400;
`;

const SizeButton = styled.button<{ $isActive?: boolean; $isSmall?: boolean }>`
  border: 0;
  width: 100%;
  border-radius: 15px;
  background: ${(p) =>
    p.$isActive ? p.theme.background.primary : "transparent"};
  height: 100%;
  text-align: center;

  h3 {
    padding: 0;
    margin: 0;
    display: block;
    ${(p) => (p.$isSmall ? p.theme.font.text.small : p.theme.font.text.large)}
  }

  span {
    ${(p) =>
      p.$isSmall ? p.theme.font.caption.small : p.theme.font.text.large}
    font-weight: 400;
    color: ${(p) => p.theme.color.secondary};
  }
`;

const Gradient = styled.div`
  width: 100%;
  min-height: 300px;
  background: linear-gradient(
    rgba(153, 152, 159, 0),
    ${(p) => p.theme.background.primary}
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 20px;
`;

const Title = styled.h2`
  padding: 0;
  padding-left: 40px;
  margin: 0;
  ${(p) => p.theme.font.title}
  width: 100%;
  text-align: center;
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
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

const Button = styled.button`
  border: 0;
  ${(p) => p.theme.font.text.large}
  font-weight: 400;
  color: ${(p) => p.theme.color.button};
  background: ${(p) => p.theme.background.accent};
  border-radius: 15px;
  width: 100%;
  padding: 15px;
`;

const Wrapper = styled.div<{ $src?: string }>`
  background: ${(p) => p.theme.background.secondary};
  background-image: url(${({ $src }) => $src});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 40px;
  position: relative;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
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
