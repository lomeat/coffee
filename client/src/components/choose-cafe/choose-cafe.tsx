import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../icon";
import { isVisibleAtom } from "../../atoms/modal.atom";
import { CafeList } from "./cafe-list";
import { CafeMap } from "./cafe-map";
import { useAtom } from "jotai";

export function ChooseCafe() {
  const [isList, setIsList] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useAtom(isVisibleAtom);

  return (
    <ModalWrapper $isVisible={isVisible.cafe}>
      <Header>
        <ChooseContainer>
          <ChooseButton $isList={isList} onClick={() => setIsList(true)}>
            Список
          </ChooseButton>
          <ChooseButton $isList={!isList} onClick={() => setIsList(false)}>
            На карте
          </ChooseButton>
        </ChooseContainer>
        <Icon
          name="CrossIcon"
          type="button"
          onClick={() => setIsVisible({ ...isVisible, cafe: false })}
        />
      </Header>
      {isList ? <CafeList /> : <CafeMap />}
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div<{ $isVisible: boolean }>`
  z-index: 1000;
  flex-direction: column;
  gap: 20px;
  background: ${(p) => p.theme.background.primary};
  display: ${(p) => (p.$isVisible ? "flex" : "none")};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

const ChooseContainer = styled.div`
  border-radius: 15px;
  background: ${(p) => p.theme.background.button};
  display: flex;
`;

const ChooseButton = styled.button<{ $isList: boolean }>`
  width: 120px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  color: ${(p) => p.theme.color.primary};
  background: transparent;
  transition: all ease 0.1s;
  ${(p) => p.theme.font.text.medium}

  ${(p) =>
    p.$isList &&
    `
    color: ${p.theme.color.button};
    background: ${p.theme.background.accent};
  `}
`;
