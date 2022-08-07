import React from 'react'
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
    SupportIcon
} from "@heroicons/react/outline"
import {useSession, signIn, signOut} from "next-auth/react"

function Header() {
    const {data: session} = useSession()

  return (
    <header>
        {/* Top nav */}
        <div className='flex items-center bg-mojo-black p-1 flex-grow py-2'>
            <div className='mt-1 mr-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image src='https://getkomfy.net/wp-content/uploads/2022/08/mojo-1.png'
                width={250}
                height={85}
                objectFit="contain"
                className="cursor-pointer"/>
            </div>
            {/* Search */}
            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-mojo-blue hover:bg-mojo-pink'>
                <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' type="text" alt='Search Products'/>
                <SearchIcon className='h-12 p-4'/>
            </div>
            {/* Right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
            <div onClick={signIn} className='link'>
            <p>
                {session ? `Hello, ${session.user.name}` : 'Sign In'}
            </p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
            </div>
        <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
            </div>
        <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-mojo-blue text-center rounded-full text-black font-bold'>0</span>
            <ShoppingCartIcon className='h-10'/>
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
            </div>
        </div>
        </div>
        
        {/* Bottom nav */}
        <div className='flex items-center space-x-3 p-2 pl-6 bg-mojo-blue text-white text-sm font-bold'>
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-1'/>
                All
            </p>
            <div className='flex space-x-3'>
            <p className='link'>Brands</p>
            <p className='link'>Powerbanks</p>
            <p className='link'>Tripods</p>
            <p className='link'>LEDs</p>
            <p className='link'>Remotes</p>
            <p className='link'>Microphones</p>
            <p className='link hidden lg:inline-flex'>Phone Holders</p>
            <p className='link hidden lg:inline-flex'>Cables</p>
            </div>
            <div className="flex pl-40">
                <SupportIcon className='h-7 mr-1'/>
            <p className='link p-1'>Customer Service</p>
            </div>
        </div>
        
    </header>
  )
}

export default Header