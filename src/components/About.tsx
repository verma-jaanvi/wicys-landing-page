import React from 'react';
import TextParallax from './ui/TextParallax';
import { Purple_Purse } from 'next/font/google';
export const About = () => {
  return (
    <div id="about" className='flex flex-col w-full h-auto relative px-12 py-24 md:p-24 gap-6 text-white overflow-hidden' 
      style={{
        backgroundColor: "#0a0820"
      }}
    >
        <p className="text-2xl text-purple-600">About The Event</p>
        <h2 className='text-2xl md:text-4xl w-full md:max-w-3xl'>
            With a stunning lineup of headliners and immersive experiences, this is the must attend event of the Advitya.
        </h2>
        <div className="relative flex h-[50vh] md:h-screen w-full bg-[url(/aboutbg02.jpeg)] bg-cover">
          <TextParallax />
          <h3 className='relative text-white p-6 text-right text-xl md:text-3xl'>
          We aim to create a memorable experience that brings Cybersecurity lovers from around the world together.
          </h3>
        </div>
        
    </div>
  )
}
