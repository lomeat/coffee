import styled from "styled-components";

import { importImages } from "./utils/importImages";
import { Header } from "./components/header";
import { Basket } from "./components/basket";
import { Container } from "./styles/shared";
import { CatalogRecently } from "./components/catalog/recently";
import { Catalog } from "./components/catalog/common";
import { DescriptionCard } from "./components/description";
import { useState } from "react";

const promoImages = importImages("promo");

export function App() {
  const [search, setSearch] = useState<string>("");

  if (search) {
    return (
      <Wrapper>
        <Header search={search} setSearch={setSearch} />
        <Catalog isSearching={!!search} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header search={search} setSearch={setSearch} />

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
