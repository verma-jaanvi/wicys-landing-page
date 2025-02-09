import React from 'react';
import styles from './styles.module.css';
import ArrowButton from './ui/ArrowButton';

export const Hero = () => {
  return (
    <div id='hero' className="relative px-12 md:px-24 w-full h-screen flex flex-col py-6 justify-center bg-[url('/herobg02.jpeg')] bg-no-repeat bg-cover bg-fixed bg-bottom">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      <p className="relative text-white z-10">Feb 20-22, 2025 | Wicys, Vit Bhopal</p>

      <h1 className='text-5xl md:text-8xl font-bold mt-14'>
        EVENT NAME <br />
        <span className={`${styles.textOutline} bg-clip-text text-transparent backdrop-blur-lg bg-white bg-opacity-20`}>Advitya 2025</span>
      </h1>
      <ArrowButton>BUY TICKET</ArrowButton>
    </div>
  )
}

