import React from 'react';

import { NavLink } from '../NavLink'; 
import Container from '../Container';
import Link from 'next/link';
const icon = 'https://static.hudl.com/users/prod/13761413_f643c62bc0fa4c828142ceee77217c3f.jpg';

export const Header = () =>
(
    <>
        <Container className="bg-almost-black-500 h-[50px] sm:h-[80px] lg:h-[100px] sticky top-0 z-50"> 
            <div className='w-full h-full flex flex-row justify-between items-center lg:px-0'>
                <Link href={'.'}>
                    <div className='relative'>
                        <img className='aspect-square h-[40px] sm:h-[60px] lg:h-[75px] rounded-full border-2 sm:border-3 sm:border-4 border-white' src={icon}/>
                        <div className="bg-green-500 h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 border-2 border-white rounded-full absolute right-[2px] sm:right-[5px] bottom-[1px] sm:bottom-[2px] lg:bottom-[5px]"/>
                    </div>
                </Link>
                <div className='flex flex-row justify-evenly items-center gap-6 sm:gap-9 lg:gap-12 xl:gap-14'> 
                    <NavLink text='Home' link='.'/>
                    <NavLink text='About' link='/about'/>
                    <NavLink text='Projects' link='/projects'/>
                    <NavLink text='Socials' link='/socials'/> 
                </div>
            </div>
        </Container>
    
    </>
)