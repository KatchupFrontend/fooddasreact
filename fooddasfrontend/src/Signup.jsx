import React from 'react'
import {useState} from 'react'
import axios from 'axios'

const Signup = () => {
  const [username,setUsername]=useState('')
  const [email,setemail]=useState('')
  const [password,setPassword]=useState('')
  const saveUser=async(e)=>{
      e.preventDefault()
    try {
      await axios.post('http://localhost:7070/api/signup/',{
        username,
        email,
        password
      }).then(
        res=>{
          if (res.status===200){
            alert('loaded')
          }else{
            alert('somn went wrong')
          }
        }
      )
    } catch (error) {
      console.log(error.response.data);
    }
  }
  return (
    <div>
      <div>
        <div className="h-full  w-full py-[80px] px-4 back">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-[50px]">
              <p
                tabindex="0"
                className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
              >
                Sign Up 
              </p>
              <p
                tabindex="0"
                className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
              >
                Already have an account?
                <span className="text-red-500 hover:text-red-600 hover:cursor-pointer">
                  Log in
                </span>
              </p>

              <form  onSubmit={saveUser}>
                <div className="mt-10 pt-5">
                  <label htmlFor="email" className="">
                    Full name
                  </label>

                  <input
                    type="text"
                    className="bg-gray-200 border rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    placeholder="User Name"
                    value={username}
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="mt-10 pt-5">
                  <label htmlFor="email" className="">
                    Email
                  </label>

                  <input
                    type="email"
                    className="bg-gray-200 border rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    placeholder="Email"
                    value={email}
                    name='email'
                    onChange={(e) => setemail(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="relative flex  flex-col mt-5">
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <input
                    type="password"
                    className="bg-gray-200 border rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    placeholder='Password'
                    value={password}
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    autoFocus
                  ></input>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-red-700 text-sm font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-600 py-4 w-full"
                   
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup