import { CarProperties } from "@/types";

export async function fetchCars() {

    const headers = {
    'X-RapidAPI-Key': '',
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };


    const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

    const result = await response.json();

    return result;
}

export const calculateCarRent = (year: number, cylinders: number, displacement: number) => {
  const basePricePerDay = 50;
  const cylinderFactor = 2.5;
  const displacementFactor = 3.5;
  const ageFactor = 0.1; 

  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const cylinderRate = cylinders * cylinderFactor;
  const displacementRate = displacement * displacementFactor;

  const rentalRatePerDay = basePricePerDay + cylinderRate + displacementRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProperties, angle? : string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;
    
    url.searchParams.append('customer', 'hrjavascript-mastery');

    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}