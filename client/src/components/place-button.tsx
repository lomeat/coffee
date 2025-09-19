import styled from "styled-components";
import { Icon } from "../icon";
import { Flex } from "../styles/shared";
import { isVisibleAtom } from "../atoms/modal.atom";
import { useAtom } from "jotai";

type Props = {
  isArrow?: boolean;
};

export function ChoosePlaceButton({ isArrow }: Props) {
  const [isVisible, setIsVisible] = useAtom(isVisibleAtom);

  if (isArrow) {
    return (
      <Flex $isSpace onClick={() => setIsVisible({ ...isVisible, cafe: true })}>
        <Flex $gap={10}>
          <Icon name="MapIcon" />
          <Button>Выбрать кофейню</Button>
        </Flex>
        <Icon name="ArrowDownIcon" rotate={-90} />
      </Flex>
    );
  }

  return (
    <Flex $gap={10} onClick={() => setIsVisible({ ...isVisible, cafe: true })}>
      <Icon name="MapIcon" type="button" />
      <Button>Выбрать кофейню</Button>
    </Flex>
  );
}

const Button = styled.button`
  ${({ theme }) => theme.font.text.large}
  background: transparent;
`;
