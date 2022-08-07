import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { TruckIcon, HomeIcon } from '@heroicons/react/solid'

function SocialBar() {
  return (
    <div className='bg-mojo-blue space-x-2 p-3 flex'>
        <SocialIcon url='https://www.instagram.com/mojogear/' network='instagram' bgColor='#ffffff' style={{height:30, width: 30, marginRight:10}}/>
        <SocialIcon url='https://www.instagram.com/mojogear/' network='facebook' bgColor='#ffffff' style={{height:30, width: 30, marginRight:10}}/>
        <SocialIcon url='https://www.instagram.com/mojogear/' network='youtube' bgColor='#ffffff' style={{height:30, width: 30, marginRight:10}}/>
        <SocialIcon url='https://www.instagram.com/mojogear/' network='tiktok' bgColor='#ffffff' style={{height:30, width: 30, marginRight:10}}/>
        <SocialIcon url='https://www.instagram.com/mojogear/' network='linkedin' bgColor='#ffffff' style={{height:30, width: 30, marginRight:10}}/>
        <TruckIcon className='w-12 space-x-3 pl-5 fill-white'/>
        <p className='mt-1 text-white'>Ordered before 16:00,</p>
        <p className='mt-1 text-mojo-orange font-semibold'>delivered tomorrow</p>
        <HomeIcon className='w-12 pl-5 fill-white'/>
        <p className='mt-1 text-mojo-orange font-semibold'>Free shipping</p>
        <p className='mt-1 text-white'>in NL</p>
    </div>
  )
}

export default SocialBar