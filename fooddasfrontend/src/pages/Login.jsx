import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const logUser=async(e)=>{
    e.preventDefault()
    try {
      axios.post('http://localhost:7070/api/login',{
        email,
        password
      }).then(res=>{
        console.log(res);
         if(res.status===200){
          alert("logged in")
        }else{
          alert('somn went wrong')
        }
      }
      )
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>
      <div className="h-full  w-full py-[80px] px-4 back">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-[50px]">
            <p
              tabindex="0"
              className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
            >
              Login to your account
            </p>
            <p
              tabindex="0"
              className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
            >
              Dont have account?
              
                <span className="text-red-500 hover:text-red-600 hover:cursor-pointer">
                  Sign up here
                </span>
    
            </p>
           

            <form onSubmit={logUser}>
              <div className="mt-10 pt-5">
                <label htmlFor="email" className="">
                  Email
                </label>

                <input
                  type="email"
                  className="bg-gray-200 border rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                 
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
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  autoFocus
                ></input>
               
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-red-700 text-sm font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-600 py-4 w-full"
                
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login