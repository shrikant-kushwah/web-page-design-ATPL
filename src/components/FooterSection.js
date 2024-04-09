import React from 'react';
import { footerLinks } from '../utils/data';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LiaYoutube } from "react-icons/lia";
import { APPLE_STORE, GOOGLE_PLAY } from '../utils/constants';

const FooterSection = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row w-full h-auto py-16 bg-white'>
        <div className='w-auto px-16 text-left'>
          <div className='w-auto h-auto'>
            <p className='text-left py-2 text-[#082f47] text-4xl font-extrabold'>Easy</p>
            <p className='text-left py-2 text-blue-600 text-4xl font-extrabold'>ahead</p>
            <p className='text-left py-2 text-gray-600 font-extralight text-lg'>We take the work out of connecting with<br /> others so you can accomplish more.</p>
          </div>
          <div className='text-left py-8 md:py-12'>
            <select className='border-[2px] border-gray-200 text-gray-600 w-[300px] md:w-[350px] rounded-lg py-2 font-semibold'>
              <option>English</option>
            </select>
          </div>
          <div className='flex items-center -mt-12'>
            <img className='w-28 md:w-36' src={APPLE_STORE} alt="apple-icon" />
            <img className='w-28 md:w-36 mx-2' src={GOOGLE_PLAY} alt="google-icon" />
          </div>
          <ul className='flex items-center gap-6'>
            <li><FaTwitter size={22} /></li>
            <li><FaFacebookF size={20} /></li>
            <li><FaInstagram size={23} /></li>
            <li><FaLinkedinIn size={24} /></li>
            <li><LiaYoutube size={26} /></li>
          </ul>
        </div>
        <div className='w-auto flex flex-wrap p-16 md:p-0'>
          {
            footerLinks.map((items) => (
              <div className='px-8 -ml-8' key={items.id}>
                <p className="font-extrabold text-[#082f47] text-xl text-left">{items.id}</p>
                <ul className="text-left text-gray-600 text-md font-extralight py-2">
                  {
                    items.links.map((link) => (
                      <li key={link.id} className="py-1">
                        {link.name}
                      </li>))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className='flex flex-wrap justify-between px-8 md:px-16 text-gray-600 text-[10px] md:text-[14px] font-light -mt-4 mb-8'>
        <p>Copyright Calendly 2024</p>
        <p>Privacy / Terms and Conditions</p>
      </div>
    </>
  )
}

export default FooterSection;
