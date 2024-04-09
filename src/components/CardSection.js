import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { cards } from '../utils/data';

const CardSection = () => {
  return (
    <div className='relative w-full h-auto bg-white px-4 md:px-8 items-center mb-14'>
      <div className='py-8 md:py-12'>
        <p className='py-1 md:py-6 font-semibold text-blue-700 text-sm md:text-md'>SOLUTIONS</p>
        <p className='py-1 font-bold text-xl md:text-4xl text-[#082f47]'>Calendly can solve your specific pain points</p>
      </div>
      <div className='w-full h-auto flex flex-wrap justify-center items-center gap-4 md:gap-8'>
        {
          cards.map((items) => (
            <div key={items.id} className='w-64 md:w-72 h-64 md:h-72 border-[2px] border-gray-100 rounded-lg shadow-lg'>
              <div className='p-2 md:p-4 m-1 md:m-2'>
                <img className='w-8 md:w-10' src={items.image} alt="" />
                <h1 className='text-left py-2 font-bold text-md md:text-xl text-[#082f47]'>{items.name}</h1>
                <p className='text-left py-1 text-gray-600 text-[14px] md:text-[16px] font-sans'>{items.text}</p>
                <button className='flex py-3 text-blue-600 font-bold text-md items-center'>{items.button} <MdOutlineKeyboardDoubleArrowRight className='mt-1 mx-2' size={24} /></button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CardSection;
