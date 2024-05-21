import React from 'react'
import CountdownTimer from './CountdownTimer'

const Hero = () => {
  return (
    // START: Hero //
    <section id="#home" className='w-full flex items-center justify-center md:justify-start md:items-start hero-container'>
        <div className="overlay"></div>
        <div className='hero-content px-20 py-20 md:max-w-[60%] lg:max-w-[50%] flex flex-col gap-y-3'>
            <h1 className='h1'>Summer Sale</h1>
            <p>Transform your child's room with our high-quality and stylish furniture and decor. Don't miss out on this exclusive sale!</p>
            <CountdownTimer />
        </div>
    </section>
    // END: Hero //
  )
}

export default Hero