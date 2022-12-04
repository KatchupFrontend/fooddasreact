import { useState } from 'react'
import {CgShoppingCart} from 'react-icons/cg'
import { BiTimer } from "react-icons/bi";
import  React  from  'react'
import data from '../../data/data';
import { Link } from 'react-router-dom';

const Product = () => {
  const [food, setFood] = useState(data)
  
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {food.map((food) => {
              const { id, name, price, image, vendor, category, location, rating, numReviews } = food;
              return (
                <div class="lg:w-1/4 md:w-1/2 p-4   w-full  " key="">
                  <a class="block relative h-48  overflow-hidden rounded-t-md">
                    <Link to={"/details/" + id} key={id}>
                      <img
                        alt="ecommerce"
                        class="object-cover object-center w-full h-full block"
                        src={image}
                      />
                    </Link>
                  </a>
                  <div class="pt-2 rounded border px-2">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {vendor}
                    </h3>
                    <div className="flex justify-between">
                      <h2 class="text-gray-900 title-font text-lg font-medium">
                        {name}
                      </h2>
                      <div className="rounded-full border p-1 border-red-400 hover:border-red-700  duration-200">
                        <CgShoppingCart
                          size={25}
                          className="text-red-400 m-1   hover:text-red-700"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mt-2">
                        <BiTimer className="" />
                      </div>

                      <p className="mt-1 mx-1"> 30-40 min</p>
                      <p className="mt-1 mx-1"> - </p>
                      <p class="mt-1"> GHC {price} </p>
                    </div>
                  </div>
                </div>
              );
            })}
          
          </div>
        </div>
      </section>
    </div>
  );
}

      


export default Product;