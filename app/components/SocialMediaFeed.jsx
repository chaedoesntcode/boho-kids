import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";

import Media1 from '../../public/images/media/Media-1.jpg'
import Media2 from '../../public/images/media/Media-2.jpg'
import Media3 from '../../public/images/media/Media-3.jpg'
import Media4 from '../../public/images/media/Media-4.jpg'

const SocialMediaFeed = () => {
  return (
    // START: SocialMediaFeed //
    <section className='w-full px-5 py-10 flex flex-col gap-4 align-center justify-center'>
         <div className="px-5 flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
            <h2 className="h2">Stay connected</h2>
            <Link href='https://www.google.com' target='_blank' className='underline hover:text-yellow transition-colors duration-300'>@shopbohokids</Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 mx-auto'>
            <div className='hover:cursor-pointer'>
                <Image src={Media1} placeholder="blur" width={400} height={400} alt='Woman and child playing outdors' className='rounded-xl media-img'/>
                <p className='text-black/70 flex gap-1 items-center'><FaHeart className='ml-1 text-yellow'/>31K</p>
            </div>
            <div className='hover:cursor-pointer'>
                <Image src={Media2} placeholder="blur" width={400} height={400} alt='Closeup of an instrument leaning against a wall' className='rounded-xl media-img'/>
                <p className='text-black/70 flex gap-1 items-center'><FaHeart className='ml-1 text-yellow'/>45K</p>
            </div>
            <div className='hover:cursor-pointer'>
                <Image src={Media3} placeholder="blur" width={400} height={400} alt='Two boys having a pillow fight, with pillows in mid-air' className='rounded-xl media-img'/>
                <p className='text-black/70 flex gap-1 items-center'><FaHeart className='ml-1 text-yellow text-yellow'/>23K</p>
            </div>
            <div className='hover:cursor-pointer'>
                <Image src={Media4} placeholder="blur" width={400} height={400} alt='Desk workspace featuring wall art, plants, and a computer' className='rounded-xl media-img'/>
                <p className='text-black/70 flex gap-1 items-center'><FaHeart className='ml-1 text-yellow'/>75K</p>
            </div>
        </div>
    </section>
    // END: SocialMediaFeed //
  )
}

export default SocialMediaFeed