import React from 'react';

export const InfoCard = ({ }) =>
(
    <>
    
        <div className='flex flex-row items-center w-2/3 h-[20em] bg-almost-black-500 rounded-2xl transition-all duration-300 hover:-translate-y-5'>
            <img className='rounded-l-2xl h-full' src='https://i.ibb.co/6mGbqWv/122426423-2630232447290059-1245205322917720626-n.jpg'/>
            <div className='flex flex-col p-10 gap-7'>
                <h1 className='text-4xl font-semibold'>Who is this?</h1>
                <p className='text-xl'>
                    Hi! My name is Aidan Ouckama and I'm a upcoming Computer Science student and front-end developer.
                    I have touched many corners within the programming world including Web Design, Game Development, Database Building,
                    Modding, and more! I've had a passion for coding from a young age and I'm excited to continuing pursuing it! 
                </p>
            </div>
            <img className='w-1/2 h-1/2 pr-14' src='https://emoji.craftwork.design/images/modal/thinking-face.png'/>
        </div>
    
    </>
)