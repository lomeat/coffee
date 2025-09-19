import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon";
import { Flex } from "../styles/shared";

type Props = {
  options: string[];
  action?: () => void;
  actionName?: string;
  title: string;
};

export function SelectModal({ options, action, actionName, title }: Props) {
  const [current, setCurrent] = useState<string | number>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (!isVisible) {
    return (
      <SelectButton onClick={() => setIsVisible(true)}>
        <Flex $gap={10}>
          <Icon name="TimeIcon" />
          <span>15 минут</span>
        </Flex>
        <Icon name="ArrowDownIcon" rotate={270} />
      </SelectButton>
    );
  }

  return (
    <ModalWrapper $isVisible={isVisible}>
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          <Icon
            name="CrossIcon"
            type="button"
            onClick={() => setIsVisible(false)}
          />
        </Header>
        {!!action && <button onClick={action}>{actionName}</button>}
        {options.map((option) => (
          <div
            onClick={() => setCurrent(option)}
            className={current === option ? "active" : "default"}
            style={{ color: current === option ? "blue" : "black" }}
          >
            {option}
          </div>
        ))}
      </Wrapper>
    </ModalWrapper>
  );
}

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
  z-index: 1000;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  padding: 0;
  padding-left: 40px;
  margin: 0;
  ${(p) => p.theme.font.title}
  width: 100%;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  width: 100%;
  background: ${(props) => props.theme.background.secondary};
`;

const SelectButton = styled.button`
  padding: 15px;
  border-radius: 15px;
  ${(p) => p.theme.font.text.large}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
