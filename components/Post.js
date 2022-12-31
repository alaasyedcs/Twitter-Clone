import React from 'react'
import Image from 'next/image'

import { HiOutlineDotsHorizontal , HiOutlineChat ,
    HiOutlineTrash , HiOutlineHeart ,
    HiOutlineShare , HiOutlineChartBar  } from "react-icons/hi";

const Post = ({ post }) => {
  return (
    <div className='flex p-3 cursor-pointer border-b border-gray-200'>

    {/* User-Img */}
      <div className="mr-4">
        <Image
          src={post.userImg}
          alt="user"
          width={50}
          height={50}
          className="rounded-full"
          />
      </div>

    {/* Right-Side */}
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between">
          {/* post-User-info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post.name}</h4>
            <span className="text-sm sm:text-[15px]">{post.userName}</span>
            <span className="text-sm sm:text-[15px] hover:underline">{post.timeStamp}</span>
          </div>
          {/* dot-Icon */}
            <HiOutlineDotsHorizontal className='h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2' />
      </div>

      {/* Post-text */}
      <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">{post.text}</p>

      {/* post-img */}
      <Image
      src={post.img}
      alt="Img"
      width={500}
      height={500}
      className='rounded-2xl mr-2'
      />

      {/* Icons */}
      <div className='flex justify-between text-gray-500 p-2'>
        <HiOutlineChat className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
        <HiOutlineTrash className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100' />
        <HiOutlineHeart className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100' />
        <HiOutlineShare className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
        <HiOutlineChartBar className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />

      </div>

    </div>
    
    </div>
  )
}

export default Post