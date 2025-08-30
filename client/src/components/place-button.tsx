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
      <ButtonNoStyles onClick={onClick}>
        <Flex $isSpace>
          <Flex $gap={10}>
            <Icon name="MapIcon" />
            <HeaderSpan>Выбрать кофейню</HeaderSpan>
          </Flex>
          <Icon name="ArrowDownIcon" rotate={-90} />
        </Flex>
      </ButtonNoStyles>
    );
  }

  return (
    <ButtonNoStyles onClick={onClick}>
      <Flex $gap={10}>
        <Icon name="MapIcon" type="button" />
        <HeaderSpan>Выбрать кофейню</HeaderSpan>
      </Flex>
    </ButtonNoStyles>
  );
}

const ButtonNoStyles = styled.button`
  padding: 0;
  margin: 0;
  background: transparent;
  border: 0;
`;

const HeaderSpan = styled.span`
  ${({ theme }) => theme.font.text.large}
`;
