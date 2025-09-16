import styled from "styled-components";
import { Icon } from "../icon";

import { lightTheme } from "../styles";
// import { useEffect } from "react";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onCancel?: () => void;
  onSubmit?: () => void;
  placeholder?: string;
  // searching when typing
  isReactive?: boolean;
};

export function Search({
  value,
  setValue,
  onCancel,
  onSubmit,
  placeholder,
  isReactive,
}: Props) {
  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     if (isReactive) {
  //       onSubmit?.();
  //     }
  //   }, 750);

  //   return () => {
  //     clearTimeout(handler);
  //   };
  // }, [value, isReactive, onSubmit]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setValue(value);

    if (isReactive) {
      setTimeout(() => {
        onSubmit?.();
      }, 100);
    }
  }

  function handleCancel() {
    setValue("");
    onCancel?.();
  }

  function handleSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSubmit?.();
    }
  }

  return (
    <Wrapper>
      <Label>
        <Icon
          name="SearchIcon"
          color={value ? lightTheme.color.primary : lightTheme.color.secondary}
        />
        <Input
          value={value}
          onChange={handleChange}
          placeholder={placeholder || "найди свой напиток"}
          onKeyPress={handleSubmit}
        />
      </Label>
      {value && <CancelButton onClick={handleCancel}>Отмена</CancelButton>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  border-radius: 15px;
  padding: 12px 16px;
  background: ${(p) => p.theme.background.button};
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  ${(p) => p.theme.font.text.medium}
  font-weight: 400;
  color: ${(p) => p.theme.color.primary};
  background: transparent;
  border: 0;
  outline: none;

  &::placeholder {
    color: ${(p) => p.theme.color.secondary};
  }
`;

const CancelButton = styled.button`
  ${(p) => p.theme.font.text.medium}
  font-weight: 400;
  color: ${(p) => p.theme.color.accent};
  background: transparent;
  height: 100%;
`;
