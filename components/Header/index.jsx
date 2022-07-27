import React from 'react';

const icon = 'https://static.hudl.com/users/prod/13761413_f643c62bc0fa4c828142ceee77217c3f.jpg';

export const Header = () =>
(
    <>
    
        <div className='static'>
            <div className='fixed flex flex-row justify-between items-center px-20 w-full h-28 bg-almost-black-500'>
                <img className='w-20 h-20 rounded-full' src={icon}/>
                <div className='flex flex-row justify-evenly items-center gap-20'>
                    <a href='.'>
                        <h1 className='text-3xl font-bold uppercase transition duration-300 hover:blur-md'>Home</h1>
                    </a>
                    <a href='.'>
                        <h1 className='text-3xl font-bold uppercase transition duration-300 hover:blur-md'>About</h1>
                    </a>
                    <a href='.'>
                        <h1 className='text-3xl font-bold uppercase transition duration-300 hover:blur-md'>Projects</h1>
                    </a>
                    <a href='.'>
                        <h1 className='text-3xl font-bold uppercase transition duration-300 hover:blur-md'>Socials</h1>
                    </a>
                </div>
                <div className='w-20'/>
            </div>
        </div>
    
    </>
)