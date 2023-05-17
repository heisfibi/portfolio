import React from 'react'; 
 
export const Banner = ({text}) =>
(
    <>
    
        <div className='w-full h-[350px] lg:h-[calc(100vh-80px)] object-fill bg-fixed bg-[url("https://i.ibb.co/wQT8tCg/122427480-161210105663948-3594706252189084805-n.jpg")]'>
            <div className='flex flex-col justify-center items-center w-full h-full backdrop-blur-sm backdrop-brightness-50'>
                <h1 className='text-5xl lg:text-9xl font-bold uppercase transition duration-300 hover:drop-shadow-lg text-white'>{text}</h1>
            </div>
        </div>
    
    </>
)