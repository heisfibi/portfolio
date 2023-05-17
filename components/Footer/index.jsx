import React from 'react'
import Container from '../Container'

function Footer() {
  return (
    <>
        <Container>
            <div className='flex flex-row justify-center text-white text-7xl font-bold pt-10 pb-20'>
                <h1 className='text-almost-black-500 text-5xl sm:text-8xl font-bold'>“</h1><h1 className='text-gray-400 text-4xl sm:text-8xl'>Hi. I{"'"}m <span className="text-gold text-5xl sm:text-8xl">Aidan</span> 👋</h1><h1 className='text-almost-black-500 text-5xl sm:text-8xl font-bold'>”</h1>
            </div>
        </Container>
    </>
  )
}

export default Footer