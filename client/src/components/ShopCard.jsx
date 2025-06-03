import React from 'react'
import Button from './Button'
export default function ShopCard({numShopCard,color,img}) {
  return (
      <div className={`${numShopCard} lg:col-span-6 col-span-12 grid grid-cols-12  gap-[1.5rem] h-70 rounded-2xl relative overflow-hidden mb-2  `} style={{ backgroundColor: color }} >
          <div className="left col-span-6 h-70 relative z-10 flex justify-center items-center ">
             <div className="img h-[80%] ">
                 <img  src={`/assets/${img}`} alt="" className="w-full h-full object-cover" />
             </div>
          </div>
          <div className="content col-span-6 relative z-10 pt-6">
              <h3 className='lg:text-[2rem] md:text-[2rem] text-[1rem] font-semibold'>Tasty Snack & Fast food</h3>
              <p className=' text-[var(--medium-gray)] grid grid-cols-12  lg:text-[1rem] md:text-[1rem] text-[.8rem] py-[1rem] ' style={{ wordSpacing: '0.2rem' ,lineHeight: '2rem' }}><span className='col-span-12'>The flavour of</span> <span className='col-span-12'>something special</span></p>
              <Button/>
          </div>
     </div>
  )
}
