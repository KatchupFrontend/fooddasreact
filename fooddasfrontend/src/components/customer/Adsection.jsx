import React from 'react'

const Adsection = () => {
  return (
    <div>
      <div className="h-60 rounded-xl bg-red-100  mx-5 flex flex-row justify-between">
        <div className="p-3 pt-10">
          <h2 className="  text-4xl ml-3">
            <span className="font-extrabold"> Food</span> You Loved <br />
            Delivered <span className='font-bold'>To You.</span>
          </h2>
        </div>
        <div className="w-2/3 md:w-1/3  mr-7 flex   items-center md:pt-5 md:m-2 ">
          <img src="./food.png" alt="" height="330px" width="300px" />
        </div>
      </div>
    </div>
  );
}

export default Adsection