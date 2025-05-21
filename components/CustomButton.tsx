"use client";

import Image from 'next/image';
import { CustomButtonProperties } from '@/types';

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProperties) => {
  return (
    <button 
        disabled={false}    
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton