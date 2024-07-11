import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({data ,reference}) {
  
  return (
    <>
        
    <motion.div drag dragConstraints={reference} className='relative w-[200px]  h-[280px] bg-zinc-900/90 rounded-[35px] px-7 py-5 text-white overflow-hidden flex-shrink-0 '>
    <FaRegFileAlt/>
    <h2 className='font-bold underline text-lg' >{data.topic}</h2>
    <p className='text-sm leading-tight mt-2 font-semibold' >{data.descr}</p>
    <div className='footer  w-full h-12 bottom-0 absolute left-0 bg-blue-800 '>
        <div className='flex justify-between items-center px-5 mt-2'>
            <h5 className='font-semibold bg-zinc-100 rounded-sm px-2 '>Edit</h5>
           <span className="bg-zinc-700 rounded-sm font-semibold px-2">
            {/* {data.close ? <IoCloseOutline/> : <LuDownload size="0.7em" color='#fff'/> } */}
            save
             </span> 
            
        </div>
        {/* {data.tag.isOpen? <div className={`tag w-full h-20 bg-${data.tag.tagColor}-600 flex items-top justify-center`}>
            <h3 className='text-md'> {data.tag.tagTitle}</h3>  </div>: null} */}
        
    </div>
    </motion.div>
        </>
  )
}

export default Card