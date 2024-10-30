import React from 'react'

export default function Herosection() {
  return (
    <div className='flex justify-center gap-10 mt-20'>
      <div>
      <h1 className='text-[37px] font-bold'> HEY,I AM  DEVANE-PHILIP <br/>
        I AM MY CODES.
      </h1>
      <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi cupiditate ut?<br /> Hic ipsam quaerat nemo voluptas temporibus cum corporis quibusdam impedit nisi alias!<br /> Cum error minus aliquid magnam harum.</p>
     
      <button className='bg-green-600 py-5 px-6 mt-5 text-white hover:bg-red-600 text-sm '>DOWNLOAD RESUME</button> 
      </div>
      <div>
        <img src="public\images\tuy.jpeg" alt="photo"  className='w-60 h-50 rounded-full '/>
        </div>
    </div>
  )
}
