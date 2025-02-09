import React from 'react';
import styles from './styles.module.css';

export const Gallery = () => {
    return (
        <div id="gallery" className='bg-slate-950 flex flex-col w-full h-auto relative px-12 py-24 md:p-24 gap-6 overflow-hidden'>
            <p className="text-2xl text-purple-600">Past Event Gallery</p>
            <h2 className='text-2xl md:text-4xl w-full md:max-w-3xl '>
                Experience the magic of past Events with our special photo gallery.
            </h2>
            <div className={`${styles.galleryBox} columns-2 md:columns-3`}>
                <img alt="gallery" src='/gallery01.jpeg' />
                <img alt="gallery" src='/gallery02.jpeg' />
                <img alt="gallery" src='/gallery03.jpeg' />
                <img alt="gallery" src='/gallery01.jpeg' />
                <img alt="gallery" src='/gallery02.jpeg' />
                <img alt="gallery" src='/gallery03.jpeg' />
                <img alt="gallery" src='/gallery01.jpeg' />
                <img alt="gallery" src='/gallery02.jpeg' />
                <img alt="gallery" src='/gallery03.jpeg' />
            </div>
        </div>
    )
}
