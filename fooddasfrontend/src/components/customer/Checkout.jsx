import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import banku from '../../assets/Jo.jpg'
import jollof from '../../assets/download.jpeg'
import PaystackPop from "@paystack/inline-js";

const Checkout= () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const amount = 554 * 100;

  const paywithPaystack = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_8a43bfaae12f785768e08d5e7adf398844bf69b9",
      email: email,
      amount: amount,
      //Successful payment
      onSuccess(transaction) {
        let msg = `Transaction Successful ${transaction.reference}`;
        alert(msg);
      },
      onCancel() {
        alert("Transaction Cancelled");
      },
    });
  };

 
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center px-5 overflow-x-hidden">
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-white py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                <div className="md:w-1/3 md:flex md:justify-end">
                  <div class="flex   justify-center md:mx-5 ">
                    <div class=" flex justify-center items-center ">
                      <div class="  justify-center items-center flex max-w-full ">
                        <div class="pointer-events-auto w-screen max-w-md ">
                          <div class="flex h-full flex-col  bg-white  ">
                            <div class="flex-1  py-6 px-4 sm:px-6 ">
                              <div class="mt-8">
                                <div class="flow-root">
                                  <ul
                                    role="list"
                                    class="-my-6 divide-y divide-gray-200"
                                  >
                                    <li class="flex py-6">
                                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={banku}
                                          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                          class="h-full w-full object-cover object-center"
                                        />
                                      </div>

                                      <div class="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div class="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <a href="#">Jollof rice</a>
                                            </h3>
                                            <p class="ml-4">Ghc 90.00</p>
                                          </div>
                                          <p class="mt-1 text-sm text-gray-500">
                                            Pizzaman's Kitchen
                                          </p>
                                        </div>
                                        <div class="flex flex-1 items-end justify-between text-sm">
                                          <p class="text-gray-500">Qty 1</p>

                                          <div class="flex">
                                            <button
                                              type="button"
                                              class="font-medium text-red-600 hover:text-red-500"
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>

                                    <li class="flex py-6">
                                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={jollof}
                                          alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                          class="h-full w-full object-cover object-center"
                                        />
                                      </div>

                                      <div class="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div class="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <a href="#">Banku and Tilapia</a>
                                            </h3>
                                            <p class="ml-4">Ghc 32.00</p>
                                          </div>
                                          <p class="mt-1 text-sm text-gray-500">
                                            Rachael B's Kitchen
                                          </p>
                                        </div>
                                        <div class="flex flex-1 items-end justify-between text-sm">
                                          <p class="text-gray-500">Qty 1</p>

                                          <div class="flex">
                                            <button
                                              type="button"
                                              class="font-medium text-red-600 hover:text-red-500"
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                              <div class="flex justify-between text-base font-medium text-gray-700">
                                <p>Subtotal</p>
                                <p>Ghc 22.00</p>
                              </div>
                              <div class="flex justify-between text-base font-medium text-gray-700">
                                <p>Delivery fee</p>
                                <p>Ghc 2.00</p>
                              </div>

                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <p>Total</p>
                                <p>Ghc 262.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                <label className="text-base leading-4 text-gray-800">
                  Full name
                </label>
                <div className="mt-8">
                  <input
                    className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <label className="mt-8 text-base leading-4 text-gray-800">
                  Email
                </label>
                <div className="mt-8">
                  <input
                    className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800">
                  Phone
                </label>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="phone"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <label className="mt-8 text-base leading-4 text-gray-800">
                  Address
                </label>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="text"
                      placeholder="Enter your address"
                    />
                  </div>
                </div>

                <button className="mt-8 border border-transparent hover:border-gray-300 bg-red-600 hover:bg-red-700 text-white hover:text-gray-100 flex justify-center items-center py-4 rounded w-full">
                  <div>
                    <p className="text-base leading-4" onClick={paywithPaystack}>Pay Ghc 504</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
