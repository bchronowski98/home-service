import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div className="w-full h-screen pt-32">
        <div className="flex items-center h-2/5 bg-[url('../public/assets/bg-test.jpg')] bg-no-repeat bg-cover bg-bottom">
            <div className="flex items-center justify-center bg-[#ecf0f3] bg-opacity-40 h-1/5 w-[90%] sm:w-[50%] mx-auto">
                <p className='text-small sm:text-xl'>Naprawa i serwis piecyków gazowych</p>
            </div>
        </div>
        <div className='flex h-3/5 sm:h-1/5 bg-[#ecf0f3] justify-center items-center'>
            <ul className='flex flex-col h-full sm:flex-row w-full md:px-8   md:justify-between items-center lg:w-[80%]'>
                <li className='my-4'><Image src="/../public/assets/firmy/ariston.png" alt='/' width={123} height={45}/></li>
                <li className='my-4'><Image src="/../public/assets/firmy/de-dietrich.png" alt='/' width={123} height={45}/></li>
                <li className='my-4'><Image src="/../public/assets/firmy/indeks.png" alt='/' width={123} height={45}/></li>
                <li className='my-4'><Image src="/../public/assets/firmy/saunierduval.png" alt='/' width={123} height={45}/></li>
                <li className='hidden sm:my-3'><Image src="/../public/assets/firmy/vaillant.png" alt='/' width={123} height={45}/></li>
                
               
            </ul>
        </div>
           

    </div>
  )
}

export default Main

