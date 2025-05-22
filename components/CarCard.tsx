import { CarProperties } from "@/types"
import Image from "next/image"
import { useState } from "react"
import CustomButton from "./CustomButton"
import { calculateCarRent } from "@/utils"

interface CarCardProperties {
    car: CarProperties
}

const CarCard = ({ car }: CarCardProperties) => {
    const { year, make, model, transmission, drive, cylinders, displacement } = car;

    const carRent = calculateCarRent(year, cylinders, displacement);
    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <p>
                <span>
                    {carRent}
                </span>
            </p>
        </div>
    )
}

export default CarCard