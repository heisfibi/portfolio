import React from 'react';

export const InfoCard = ({ title, description, image }) =>
(
    <>
    
        <div className='flex flex-row items-center w-2/3 h-[20em] bg-almost-black-500 rounded-2xl drop-shadow-md transition-all duration-300 hover:-translate-y-5 hover:drop-shadow-2xl'>
            <img className='rounded-l-2xl h-full' src='https://i.ibb.co/6mGbqWv/122426423-2630232447290059-1245205322917720626-n.jpg'/>
            <div className='flex flex-col p-10 gap-7'>
                <h1 className='text-4xl font-semibold'>{title}</h1>
                <p className='text-xl'>{description}</p>
            </div>
            <img className='w-1/2 h-1/2 pr-14' src={image}/>
        </div>
    
    </>
)