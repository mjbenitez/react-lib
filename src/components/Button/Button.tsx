import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

// Assign style properties to the button
const StyledButton = styled.button<ButtonProps>`
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  color: ${(props) => (props.color)};
  background-color: ${(props) => (props.primary ? "#FF4785" : "#ffffff")};
  border: solid 2px #FF4785;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? "#e05181" : "#FF4785")};
  }
  &:active {
    border: solid 2px #FF4785;
    padding: ${(props) =>
      props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

const Button: React.FC<ButtonProps> = ({
      size,
    primary,
    disabled,
    text,
    color,
    onClick
}) => {
    return(
        <StyledButton
            type="button"
            onClick={onClick}
            primary={primary}
            disabled={disabled}
            color={color}
            size={size}>
                {text}
        </StyledButton>
    );
};

export default Button;
