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

export interface CarProperties {
    city_mpg: string;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: string;
    make: string;
    model: string;
    transmission: string;
    year: number;
}