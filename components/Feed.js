import React from 'react'

import Input from "./Input";
import Post from "./Post";

import profile from "../assets/profile.png";

import { HiOutlineSparkles } from "react-icons/hi";



const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Alaa Elsayed",
      userName: "@alaa-1996",
      userImg: profile,
      img: "https://images.unsplash.com/photo-1662402293121-f25baa3718a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "Nice View!",
      timeStamp: "2 hours ago"
    },
    {
      id: "2",
      name: "Alaa Elsayed",
      userName: "@alaa-1996",
      userImg: profile,
      img: "https://images.unsplash.com/photo-1662443797435-a4ebbffd77cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      text: "Wow!",
      timeStamp: "2 days ago"
    },
  ]


  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 min-w-xl
      sm:ml-[73px] flex-grow max-w-xl">

      {/* Header & Borders */}
      <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>

        <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>

        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <HiOutlineSparkles />
        </div>
      </div>

      {/* What's happening? */}
      <Input />

      {/* Tweets */}
      {posts.map((post)=>(

        <Post key={post.id} post={post} />
      )
      )
      }

    </div>
  )
}

export default Feed