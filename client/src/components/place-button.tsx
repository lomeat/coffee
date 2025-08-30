import styled from "styled-components";
import { Icon } from "../icon";
import { Flex } from "../styles/shared";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isArrow?: boolean;
};

export function ChoosePlaceButton({ onClick, isArrow }: Props) {
  if (isArrow) {
    return (
      <Flex $isSpace onClick={onClick}>
        <Flex $gap={10}>
          <Icon name="MapIcon" />
          <HeaderSpan>Выбрать кофейню</HeaderSpan>
        </Flex>
        <Icon name="ArrowDownIcon" rotate={-90} />
      </Flex>
    );
  }

  return (
    <Flex $gap={10} onClick={onClick}>
      <Icon name="MapIcon" type="button" />
      <HeaderSpan>Выбрать кофейню</HeaderSpan>
    </Flex>
  );
}

const HeaderSpan = styled.span`
  ${({ theme }) => theme.font.text.large}
`;
