import React from 'react'

export default function BlogCard({blogData}) {
  return (
      <div className='blog-card rounded-[30px] overflow-hidden relative lg:col-span-3 md:col-span-4 col-span-6 h-[45vh]'>
          <img src={blogData.img} alt=""  className=' w-full h-full object-cover transform scale-110 '/>
          <div className="content absolute bottom-1 left-0 bg-[#ffffffe6] rounded-4xl py-3 px-4 w-[96%] transform translate-x-[2%] ">
              <span className='text-[.9rem] text-[var(--medium-gray)] '>{blogData.date}</span>
              <h5 className='text-[1.1rem] font-medium opacity-80 leading-tight mt-1'>{blogData.title}</h5>
          </div>
      </div>
  )
}
