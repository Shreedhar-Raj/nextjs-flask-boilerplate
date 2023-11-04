import Sidebar from '@/components/Sidebar'
import React from 'react'
import { useState } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TopNavbar from '@/components/TopNav';
import LogoutIcon from '@mui/icons-material/Logout';

function index() {
  return (
      <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full h-screen'>
        <TopNavbar className='max-w-100' />
      <div className='flex justify-center h-full  w-full oveflow-hidden items-center'>
      <div className='items-center'>
        <button className='bg-orange-300 items-center rounded-xl p-5 relative border border-2 border-orange-400'>Log Out  
         <LogoutIcon className='pl-2' />
        </button>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default index