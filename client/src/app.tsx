import "normalize.css";
import styled from "styled-components";

export function App() {
  return (
    <Wrapper>
      <Header>
        <Flex $isSpace>
          <Flex $gap={10}>
            <HeaderButton>X</HeaderButton>
            <HeaderSpan>Выбрать кофейню</HeaderSpan>
          </Flex>
          <HeaderButton>{/* <ProfileIcon /> */}</HeaderButton>
        </Flex>
        <HeaderSearch value="qweqwe" />
      </Header>
      <Container>
        <BlueTest />
      </Container>
    </Wrapper>
  );
}

const BlueTest = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.background.lightblue};
  border-radius: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: #f1f5fd; */
  background: #fffef8;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
  /* background: #fffef8; */
  /* border-radius: 0 0 20px 20px; */
`;

const Flex = styled.div<{
  $isSpace?: boolean;
  $isColumn?: boolean;
  $gap?: number;
  $padding?: number;
}>`
  display: flex;
  justify-content: ${({ $isSpace }) =>
    $isSpace ? "space-between" : "flex-start"};
  flex-direction: ${({ $isColumn }) => ($isColumn ? "column" : "row")};
  gap: ${({ $gap }) => `${$gap}px`};
  padding: ${({ $padding }) => `${$padding}px`};
`;

const HeaderButton = styled.button`
  border: 0;
  border-radius: 100%;
  background: rgba(64, 40, 36, 0.05);
`;

const HeaderSearch = styled.input`
  border-radius: 15px;
  padding: 15px;
  color: #2e3ac2;
`;

const HeaderSpan = styled.span`
  ${({ theme }) => theme.font.large.medium}
`;

// const HeaderSearch2 = styled.label`
//   /* qweqwe */
// `;

// const HeaderSearchInput = styled.input`
//   // qweqwe
// `;

// const HeaderSearchIcon = styled.div``;
