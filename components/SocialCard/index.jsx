import React from 'react';
export const SocialCard = ({ title, description, image, link }) =>
(
    <>
        <a href={link} target="_blank" rel="noreferrer">
            <div className='flex flex-col lg:h-60 lg:flex-row items-center w-full h-full bg-almost-black-100 rounded-2xl drop-shadow-md transition-all duration-300 hover:-translate-y-3 sm:hover:-translate-y-5 hover:drop-shadow-2xl'>
                <img className='lg:rounded-l-2xl bg-white rounded-t-2xl lg:rounded-r-none w-full lg:w-3/6 lg:h-full max-h-64 lg:aspect-square aspect-[4/3] object-cover' src={image}/>
                <div className='flex flex-col justify-center w-full h-full p-3 pb-4 sm:p-6 gap-4'> 
                    <h1 className='text-3xl font-semibold h-1/2 text-white'>{title}</h1>
                    <p className='text-base text-gray-300 h-30'>{description}</p>
                </div>
            </div>
        </a>
    
    </>
)
