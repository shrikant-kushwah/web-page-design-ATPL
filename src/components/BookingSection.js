import React from 'react'

const BookingSection = () => {
  return (
    <div className='bg-[#082f47] w-screen h-auto'>
      <div className='py-4 md:py-8'>
        <div className='py-4 w-full'>
          <p className='py-2 md:py-4 font-extrabold text-white text-2xl md:text-4xl'>Easy access for easy bookings</p>
          <p className='py-2 md:py-4 font-extralight text-gray-300 text-[10px] md:text-[22px]'>Share your Calendly link right right from your browser, so you can schedule meetings <br /> without the back-and-forth</p>
        </div>
        <div className='py-2 m-4 -mt-2'>
          <button className='bg-blue-600 p-4 md:p-8 py-2 md:py-4 text-white font-semibold 
          text-[12px] md:text-[14px] rounded-full'>Start for free</button>
          <button className='border-[1px] md:border-[2px] border-white mx-6 p-4 md:p-8 py-2 md:py-4 text-white font-semibold text-[12px] md:text-[14px] rounded-full'>Talk with Sales</button>
        </div>
      </div>
    </div>
  )
}

export default BookingSection;
