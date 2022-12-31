import React from 'react'
import Image from "next/image"

import SidebarMenuItem from "./SidebarMenuItem";

import { images } from "../constant";

import { HiHome , HiOutlineHashtag , HiOutlineBell , HiOutlineInbox , 
HiOutlineBookmark , HiOutlineClipboard , HiOutlineUser ,
HiOutlineDotsCircleHorizontal , HiDotsHorizontal } from "react-icons/hi";


const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col xl:items-start p-2 fixed h-full xl:ml-20">

     {/* logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-3">
          <Image width="40%" height="40%" src={images.logo} />
      </div>

      
    {/* Menu */}
      <div className="mt-2.5 mb-1 xl:items-start sm:ml-2">
          <SidebarMenuItem text="Home" Icon={HiHome} active />
          <SidebarMenuItem text="Explore" Icon={HiOutlineHashtag} />
          <SidebarMenuItem text="Notifications" Icon={HiOutlineBell} />
          <SidebarMenuItem text="Messages" Icon={HiOutlineInbox} />
          <SidebarMenuItem text="Bookmarks" Icon={HiOutlineBookmark} />
          <SidebarMenuItem text="Lists" Icon={HiOutlineClipboard} />
          <SidebarMenuItem text="Profile" Icon={HiOutlineUser} />
          <SidebarMenuItem text="More" Icon={HiOutlineDotsCircleHorizontal} />
      </div>


     {/* Button */}
      <button className="bg-blue-400 w-56 h-12 rounded-full text-white font-bold text-lg hover:brightness-95 shadow-md hidden xl:inline">
        Tweet
      </button>

     {/* Mini-Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        
        <Image width="50%" height="50%" 
        src={images.profile}
        alt="profile" 
        />

        <div className="xl:ml-2 leading-5 hidden xl:inline">
          <h4 className="font-bold">Alaa El Sayed</h4>
          <p className="text-gray-500">@alaa-1996</p>
        </div>
        
        <HiDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
      </div>

    </div>
  )
}

export default Sidebar