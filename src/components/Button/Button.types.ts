import { MouseEventHandler } from "react";

export interface ButtonProps {

    // Props of the button - use them in the button component to add or enable different properties
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    onClick?: MouseEventHandler<HTMLButtonElement>;  // onClick event tells that the onChange prop is responsible for a mouse event

}