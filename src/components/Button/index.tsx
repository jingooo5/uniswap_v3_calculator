import { Button, ButtonBase, ButtonBaseProps } from "@mui/material";
import styled from "styled-components";

type BaseButtonProps = {
  padding?: string;
  width?: string;
  $borderRadius?: string;
  altDisabledStyle?: boolean;
} & ButtonBaseProps;

export const BaseButton = styled(ButtonBase)<BaseButtonProps>`
  padding: ${({ padding }) => padding ?? "16px"};
  width: ${({ width }) => width ?? "100%"};
  font-weight: 500;
  text-align: center;
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "20px"};
  outline: none;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.textPrimary};
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    opacity: 50%;
    cursor: auto;
    pointer-events: none;
  }

  will-change: transform;
  transition: transform 450ms ease;
  transform: perspective(1px) translateZ(0);

  > * {
    user-select: none;
  }

  > a {
    text-decoration: none;
  }
`;
