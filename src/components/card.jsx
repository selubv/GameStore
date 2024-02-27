import React from 'react'

const Card = (props) => {
    const { img, title, category, price} = props;

  return (
    <div className='bg-[#362C29]/50 p-6 rounded-2xl flex flex-col gap-2 w-full md:w-auto'>
        <img
            src={img}
            className='w-full xl:w-52 h-52 object-cover rounded-2xl'
        />
        <h1 className='text-xl text-white'>{title}</h1>
        <span className='text-gray-400'>{category}</span>
        <div className='flex items-center gap-4'>
            <h5 className='text-2xl text-[#E58D27]'>${price}</h5>
            <button className='bg-[#E58D27] text-black font-bold rounded-full w-full p-3 hover:-traslate-y-1 transition-all
            duration-200'>
                Buy
            </button>
        </div>
    </div>
  )
}

export default Card