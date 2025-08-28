import styled from "styled-components";

import * as icons from "./assets/icons";

export type IconName = keyof typeof icons;

type IconProps = {
  name?: IconName;
  size?: number;
  color?: string;
};

export function Icon({ name, size, color }: IconProps) {
  const IconComponent = name ? icons[name] : DefaultIcon;

  return (
    <IconComponent
      width={size}
      height={size}
      fill={color || "#402824"}
      color={color || "#402824"}
    />
  );
}

const DefaultIcon = styled.div`
  border: 2px solid #402824;
  border-radius: 100%;
  width: 24px;
  height: 24px;
`;
