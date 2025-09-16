import styled from "styled-components";

import { importImages } from "./utils/importImages";
import { Header } from "./components/header";
import { Basket } from "./components/basket";
import { Container } from "./styles/shared";
import { CatalogRecently } from "./components/catalog/recently";
import { Catalog } from "./components/catalog/common";
import { DescriptionCard } from "./components/description";
import { useAtomValue } from "jotai";
import { searchValueAtom } from "./atoms/coffee.atom";

const promoImages = importImages("promo");

export function App() {
  const searchValue = useAtomValue(searchValueAtom);

  if (searchValue) {
    return (
      <Wrapper>
        <Header />
        <Catalog />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header />

      <CatalogRecently />
      <Container>
        <img src={promoImages[0]} />
      </Container>

      <Catalog />
      <Basket />
      <DescriptionCard />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.background.primary};
  gap: 20px;
  padding-bottom: 100px;
`;
