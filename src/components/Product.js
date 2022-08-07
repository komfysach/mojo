import React, { useState } from 'react'
import Image from 'next/image'
import {StarIcon} from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'

// const MAX_RATING = 5;
// const MIN_RATING = 1;

function Product({id, title, price, description, category, image, rating}) {
    // const [rating] = useState(typeof window !== "undefined" &&
    //     Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    // );

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 rounded-3xl'>
        <p className='bg-mojo-blue rounded-full py-1 absolute top-2 right-2 text-xs bold text-white p-3 my-2 mx-2'>{category}</p>
        <Image src={image} height={200} width={200} objectFit='contain'/>
        <h4 className='my-3 font-medium'>{title}</h4>
        <div className='flex'>
            <StarIcon className='fill-mojo-orange h-5'/>
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5 font-medium'>
            <Currency quantity={price} currency='EUR'/>
        </div>
        <button className='mt-auto button text-white'>Add to Basket</button>
    </div>
  )
}

export default Product