import React from 'react'
import { bannerImages } from '../data/data'
import Slider from './Slider'
import Button from './Button'

export default function HeroBanner() {
    // const imageSlides = bannerImages.map((ele,index) => (
    //     <div key={index} className='w-[25rem] h-[28rem] bg-white  animate-morph relative ' >
    //     <img src={ele}  alt="" className='object-contain absolute top-[-2rem] left-0 scale-130 h-[100%] w-[100%]'/>
    //    </div>
    // ))
  return (
      <div className='banner grid grid-cols-12 bg-gray-200 px-[7.5rem] lg:gap-[.5rem] items-center  gap-y-[1rem]  '>
          <div className="banner-content lg:col-span-6 flex lg:-order-1 flex-col gap-y-[1rem]  lg:items-start col-span-12 items-center justify-center">
              <span className='text-[var(--medium-gray)] text-[1.4rem]'>flat 30% off</span>
               <h2 className='text-[2.5rem] font-bold  grid grid-cols-12'><span className='col-span-12'>explore <span className='organic text-[var(--main-color)] relative mr-6'>organic</span></span><span className='col-span-12'> & fresh vegetables</span></h2>
                <Button/>
          </div>
        {/* <Slider items={imageSlides} /> */}
          <div className="banner-img lg:col-span-6 flex items-center justify-center lg:h-[100vh] h-[90vh] col-span-12 -order-1">
                 <div className='w-[25rem] h-[28rem] bg-white  animate-morph relative ' >
                  <img src={bannerImages[0]}  alt="" className='object-contain absolute top-[-2rem] left-0 scale-125 h-[100%] w-[100%]'/>
           </div>
  
          </div> 
      </div>
  )
}
