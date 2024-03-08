import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#5E7397] py-4 my-16'>
        <div className='bg-[#274374] flex justify-center items-center gap-16 p-16'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-[58px] font-bold'>15k</h1>
                <h5 className='text-[20px] font-semibold text-[#0F9FD6]'>Happy Customers</h5>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-[58px] font-bold'>150k</h1>
                <h5 className='text-[20px] font-semibold text-[#0F9FD6]'>Monthly Visitors</h5>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-[58px] font-bold'>15</h1>
                <h5 className='text-[20px] font-semibold text-[#0F9FD6]'>Countries  Worldwide</h5>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-[58px] font-bold'>100+</h1>
                <h5 className='text-[20px] font-semibold text-[#0F9FD6]'>Top Partners</h5>
            </div>
        </div>
    </div>
  )
}

export default Banner