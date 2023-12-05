import React from 'react'

import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-slate-900 py-36'>
      <div className='max-w-full mx-auto text-center text-white font-bold md:space-y-7 space-y-2'>
        <div className='text-xl md:text-3xl'>Learn with us</div>
        <div className='text-3xl md:text-6xl'>Grow with us</div>
        <div className='text-2xl md:text-4xl'>Learn &nbsp;
        <Typed
                    strings={['Web Development','Digital Marketing', 'Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                />
        </div>
      </div>
    </div>
  )
}
