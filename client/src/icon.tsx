import styled from "styled-components";

import * as icons from "./assets/icons";

export type IconName = keyof typeof icons;

type IconProps = {
  name?: IconName;
  size?: number;
  color?: string;
  type?: "button";
  rotate?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Icon({ name, size, color, type, onClick, rotate }: IconProps) {
  const IconComponent = name ? icons[name] : DefaultIcon;

  if (type === "button") {
    return (
      <Button onClick={onClick}>
        <IconComponent
          width={size || 24}
          height={size || 24}
          color={color || "#402824"}
          style={rotate ? { rotate: `${rotate}deg` } : {}}
        />
      </Button>
    );
  }

  return (
    <IconComponent
      width={size || 24}
      height={size || 24}
      color={color || "#402824"}
      style={rotate ? { rotate: `${rotate}deg` } : {}}
    />
  );
}

const DefaultIcon = styled.div`
  border: 2px solid #402824;
  border-radius: 100%;
  width: 24px;
  height: 24px;
`;

const Button = styled.button`
  border: 0;
  border-radius: 100%;
  background: rgba(64, 40, 36, 0.05);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
