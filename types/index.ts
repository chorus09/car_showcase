import { MouseEventHandler } from "react";

export interface CustomButtonProperties {
    title: string;
    containerStyles?: string;
    handleClick?:
        MouseEventHandler<HTMLButtonElement>;
}