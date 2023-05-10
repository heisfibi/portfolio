import React from 'react';
export const SocialCard = ({ title, description, image, link }) =>
(
    <>
        <a href={link} target="_blank" rel="noreferrer">
            <div className='flex flex-col md:flex-row gap-5 items-center w-full h-full bg-almost-black-500 rounded-2xl drop-shadow-md transition-all duration-300 hover:-translate-y-5 hover:drop-shadow-2xl'>
                <img className='xl:rounded-l-2xl bg-white rounded-t-2xl w-full md:w-2/5 h-60 object-cover' src={image}/>
                <div className='flex flex-col justify-center w-full md:w-2/5 h-full p-6 gap-4'>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <p className='text-lg'>{description}</p>
                </div>
            </div>
        </a>
    
    </>
)