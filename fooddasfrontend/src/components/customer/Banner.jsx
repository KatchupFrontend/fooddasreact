import { Carousel } from "flowbite-react"
import party from '../../assets/party01.jpg'
import party2 from '../../assets/party02.jpg'
import React from "react";
import post from '../../assets/uy.jpg'
import img from '../../assets/online.png'
const Banner = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2 md:w-full">
            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50  sm:flex-row flex-col">
              
            
               

                
                  <img src={post} alt="" className="w-full h-full" />
                
          
            </div>
          </div>
          <div class="p-4 lg:w-1/2 md:w-full">
            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50  sm:flex-row flex-col">
             
              <img src={post} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner