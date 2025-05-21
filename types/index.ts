import { MouseEventHandler } from "react";

export interface CustomButtonProperties {
    title: string;
    containerStyles?: string;
    handleClick?:
        MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchManufacturerProperties {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}