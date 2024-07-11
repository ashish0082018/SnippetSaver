import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
   const ref=useRef(null)
  const data=[
        {
            topic:"Prime number",
            descr:"Code...",
        },
        {
          topic:"Factorial",
            descr:"Hello i am ashish verma ....",
          
        },
        { 
            topic:"Sum of n natural number",
            descr:"Hello i am ashish verma ....",
            
        }
    ]
  return (
    <>
     <div ref={ref} className="p-5 fixed top-0 left-0 z-[3] h-full w-full flex gap-5 flex-wrap" >
       {data.map((item,index)=>(
        <Card data={item} reference={ref} />
       ))}
     </div>
    </>
  )
} 

export default Foreground