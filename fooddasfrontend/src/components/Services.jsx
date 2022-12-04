import React from 'react'
import store from '../assets/storefront.svg'

const Services = () => {
    const ourservices = [
        {
            id: 1,
            title: 'Fastest Delivery',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            icon: store,
        },
        {
            id: 2,
            title: 'A Good Auto Responder',

            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            icon: store
        },
        {

            id: 3,
            title: 'Home Delivery',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            icon: store
        }

    ]


  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {
                ourservices.map((service, ) => (
                     <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                
              <div class=" inline-flex items-center justify-center mb-5 flex-shrink-0">
                { <img src={service.icon} alt="" className='w-48 h-48'/>}
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  {service.title}
                </h2>
                <p class="leading-relaxed text-base">
                 {service.description}
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

                ))
            }

           
            
            
          </div>
         
        </div>
      </section>
    </div>
  );
}

export default Services