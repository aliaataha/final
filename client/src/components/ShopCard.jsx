import React from 'react'
import Button from './Button'
export default function ShopCard({numShopCard,color,img}) {
  return (
      <div className={`${numShopCard} lg:col-span-6 col-span-12 grid grid-cols-12  h-[330px]  rounded-2xl relative overflow-hidden mb-9  p-6  `} style={{ backgroundColor: color }} >
          <div className="img col-span-6  flx items-center justify-center relative z-10 ">
              <img  src={`/assets/${img}`} alt="" className="w-[90%] h-[90%] object-contain " />
          </div>
          <div className="content col-span-6  relative z-10">
              <h3 className='text-[2rem] font-semibold'>Tasty Snack & Fast food</h3>
              <p className=' text-[var(--medium-gray)] grid grid-cols-12 py-[1rem] ' style={{ wordSpacing: '0.2rem' ,lineHeight: '2rem' }}><span className='col-span-12'>The flavour of</span> <span className='col-span-12'>something special</span></p>
              <Button/>
          </div>
     </div>
  )
}
