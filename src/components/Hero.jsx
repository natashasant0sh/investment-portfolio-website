import React from 'react'
import Typed from 'react-typed'
import stocks_png from '../assets/stocks_png.png'
const Hero = () => {
  return (
    <div className='mx-auto max-w-[1240px] flex items-end'>
        <div className='w-[620px] flex flex-row justify-center translate-y-20'>
        <div className='mt-[-96px] w-full h-screen text-center flex flex-col justify-center'>
            <h1 className='text-[#6499E9] text-4xl font-bold font-outfit p-2'>Your Financial Future!</h1> 
            <div className='flex items-center justify-center'> 
                <p className='text-[#9EDDFF] text-5xl font-outfit font-bold'>Empowering</p>
                <Typed className='text-[#A6F6FF] text-5xl font-outfit font-bold pl-2' strings={['Investments.','Growth.','Success.']} typeSpeed={130} backSpeed={150} loop/>
            </div>
            <div className='mt-3 text-white text-0.3rem font-roboto-mono'>
                <p> Explore our world of investment opportunities, tailored to your unique goals and aspirations. Whether you're a seasoned investor or just getting started, we've got the tools, insights, and expertise to help you make confident decisions.</p>
            </div>
            <button className='bg-[#32C6DA] w-[180px] rounded-md font-medium my-6 mx-auto py-3 text-[ #053B50] font-outfit text-1.5xl transition-transform duration-400 ease-in-out hover:scale-110'> 
                Get Started 
            </button>
        </div>
        </div>
        
        <div className='w-[620px] flex justify-center items-center  transform -translate-y-[50px] transition-transform duration-300 ease-in-out hover:scale-110'>
            <img src={stocks_png} alt="stocks" className='h-[560px] w-[560px]'/>
        </div>
        
    </div>
    
  )
}

export default Hero