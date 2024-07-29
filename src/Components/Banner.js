import React from 'react'
import pizza from '../Assets/pizza.png'
import image from '../Assets/hero-banner.jpg'
import './banner.css'


const Banner = () => {
  return (
    <div className="pt-20 ">
      <div class="main p-7 md:p-14 md:grid md:grid-cols-2 ">
          <div className="box relative md:mt-[70px] md:px-[30px] " >
              <h1 className='text-white font-bold text-3xl md:text-6xl md:mb-8'>Are You <span className='text-peel-orange-custom font-pacifico font-medium'>Hungry</span> ?</h1>
              <h4 className='text-peel-orange-custom font-bold mb-8 text-xl md:text-3xl'>Order Your Meal</h4>
              <p className='text-white mb-8 max-sm:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur
                  sapiente deserunt quis aut, distinctio quo autem, repellat assumenda
                  mollitia aliquam reprehenderit? Magnam, odit est voluptates perferendis
                  aperiam nisi unde!</p>
          </div>
          <div className='right-img max-sm:hidden'>
            <img src= {pizza} alt="" className='h-auto w-[450px] ml-36 animate-spin-slow'/>
          </div>
      </div>
    </div>
  )
}

export default Banner;
