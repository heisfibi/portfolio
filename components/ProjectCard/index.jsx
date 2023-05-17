import Link from 'next/link';
import React from 'react';

export const ProjectCard = ({ title, description, image, date, link }) =>
(
    <>

        <Link href={"projects/" + link}>
            <div className='flex flex-col items-center w-full h-full bg-almost-black-100 rounded-2xl drop-shadow-md transition-all duration-300 hover:scale-95 hover:drop-shadow-2xl cursor-pointer'>
                <img className='rounded-t-2xl w-full h-[20em] object-cover' src={image}/>
                <div className='flex flex-col w-full p-3 pb-4 sm:p-6 gap-4'>
                    <h1 className='text-3xl font-semibold h-1/2 text-white'>{title}</h1>
                    <p className='text-base sm:text-lg text-gray-300 h-30'>{description}</p>
                    <p className='text-lg italic text-gray-300 opacity-50'>{date}</p>
                </div>
            </div>
        </Link> 
    
    </>
)