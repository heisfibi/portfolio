import React from 'react';
export const InfoCard = ({ title, description, image, emoji }) =>
(
    <>
    
        <div className='flex lg:flex-row flex-col items-center h-full bg-almost-black-100 rounded-t-2xl lg:rounded-2xl drop-shadow-md transition-all duration-300 hover:-translate-y-3 sm:hover:-translate-y-5 hover:drop-shadow-2xl'>
            <img className='lg:rounded-l-2xl lg:rounded-r-none rounded-t-2xl w-full lg:w-1/3 h-96 object-cover' src={image}/>
            <div className='flex flex-col p-3 pb-4 sm:p-6 xl:px-7 gap-4'>
                <h1 className='text-3xl font-semibold h-1/2 text-white'>{title}</h1>
                <p className='text-base sm:text-lg text-gray-300 h-30'>{description}</p>
            </div>
            <img className='w-1/3 h-36 lg:pr-9 pb-10 object-contain' src={emoji}/>
        </div>
    
    </>
)
