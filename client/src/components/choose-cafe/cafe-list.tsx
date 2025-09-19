import styled from "styled-components";
import { Icon } from "../../icon";
import { Flex, ScrollContainer } from "../../styles/shared";

const list = Array.from({ length: 8 }, () => ({
  title: "Title",
  street: "Street",
  time: "09-21",
  distance: 1.3,
}));

export function CafeList() {
  return (
    <ScrollContainer style={{ gap: 30 }}>
      {list.map((item) => (
        <Flex $isSpace>
          <Flex style={{ alignItems: "flex-start" }}>
            <Flex $isColumn>
              <Title>{item.title}</Title>
              <Street>{item.street}</Street>
            </Flex>
            <Time>{item.time}</Time>
          </Flex>
          <DistanceWrapper>
            <Icon name="PaymentCardIcon" />
            <Distance>{item.distance} км</Distance>
          </DistanceWrapper>
        </Flex>
      ))}
    </ScrollContainer>
  );
}

const Title = styled.span`
  ${(p) => p.theme.font.text.large}
  color: ${(p) => p.theme.color.accent};
`;

const Street = styled.span`
  ${(p) => p.theme.font.desc}
  color: ${(p) => p.theme.color.primary};
`;

const Time = styled.span`
  ${(p) => p.theme.font.caption.small}
  color: ${(p) => p.theme.color.secondary};
`;

const Distance = styled.span`
  ${(p) => p.theme.font.text.medium}
  color: ${(p) => p.theme.color.primary};
`;

const DistanceWrapper = styled.div`
  background: ${(p) => p.theme.background.button};
  border-radius: 15px;
  padding: 10px;
`;
