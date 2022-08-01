import React from 'react'
import { SocialIcon } from 'react-social-icons';

function SocialBar() {
  return (
    <div className='bg-mojo-orange p-3'>
        <SocialIcon url='https://www.instagram.com/mojogear/' network='instagram' bgColor='#000000' style={{height:30, width: 30, marginRight:10}}/>
        <SocialIcon url='https://www.instagram.com/mojogear/' network='facebook' bgColor='#000000' style={{height:30, width: 30, marginRight:10}}/>
        <SocialIcon url='https://www.instagram.com/mojogear/' network='youtube' bgColor='#000000' style={{height:30, width: 30, marginRight:10}}/>
        <SocialIcon url='https://www.instagram.com/mojogear/' network='tiktok' bgColor='#000000' style={{height:30, width: 30, marginRight:10}}/>
        <SocialIcon url='https://www.instagram.com/mojogear/' network='linkedin' bgColor='#000000' style={{height:30, width: 30, marginRight:10}}/>

    </div>
  )
}

export default SocialBar