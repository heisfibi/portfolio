import React from 'react';
import Link from 'next/link';



export const NavLink = ({ text, link }) =>
(
    <>
    
        <Link href={link}>
            <a><h1 className='text-base text-white sm:text-2xl lg:text-3xl font-bold transition duration-300 hover:blur-sm'>{text}</h1></a>
        </Link>
    
    </>
)