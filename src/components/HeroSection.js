import React from 'react'

const HeroSection = () => {
  return (

    <div className='w-full h-auto bg-white justify-center items-center md:py-8 mb-8 md:mb-0'>
      <div className='absolute overflow-hidden w-screen left-0 right-0 mt-12 md:mt-20'>
        <button className='bg-blue-400 w-[400px] md:w-[1100px] h-[400px] md:h-[1100px] rounded-full bg-opacity-5'></button>
      </div>
      <div>
        <p className='py-2 md:py-4 text-blue-700 font-semibold text-sm md:text-md'>SOLUTIONS</p>
        <p className='py-2 md:py-4 text-2xl md:text-6xl font-extrabold text-[#082f47]'><span className='text-blue-600'>Calendly</span> for the work you do</p>
        <p className='py-2 md:py-4 text-gray-500 font-normal text-[12px] md:text-[20px]'>Across a range of uses, Calendly hellps people and teams build <br /> efficiency, professionalism, and results into the work they do.</p>
      </div>
      <div className='py-2 md:py-4'>
        <button className='p-4 md:p-8 py-2 md:py-4 rounded-full bg-blue-600 text-white font-semibold text-sm md:text-md'>Contact sales</button>
      </div>


    </div>
  )
}

export default HeroSection;
