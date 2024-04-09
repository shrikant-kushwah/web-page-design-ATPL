import React from 'react'
import Header from './Header';
import HeroSection from './HeroSection';
import CardSection from './CardSection';
import BookingSection from './BookingSection';
import FooterSection from './FooterSection';

const Body = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <CardSection/>
      <BookingSection/>
      <FooterSection/>
      {/* 
      Header
      HeroSection

      */}
    </div>
  )
}

export default Body;
