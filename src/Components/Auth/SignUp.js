import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="min-h-screen flex items-center text-center justify-center bg-gray-50 ">
        <div className="max-w-md w-full bg-white p-16 rounded-md">
          <div className="inner">
            <h1 className="font-bold text-3xl text-blue-800">
              Welcome My Friend !
            </h1>
            <h2 className="font-bold text-blue-400 text-md">
              Create Your Account Now
            </h2>
            <form>
              <div className="mx-auto font-bold text-xl leading-8 mt-16">
                <input
                  className="border border-gray-400 rounded-md p-3 mb-6"
                  type="text"
                  placeholder="Enter Your FullName"
                />
                <input
                  className="border border-gray-400 rounded-md p-3 mb-6"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <input
                  className="border border-gray-400 rounded-md p-3 mb-6"
                  type="password"
                  placeholder="Create Your Password"
                />
                <input
                  className="border border-gray-400 rounded-md p-3 mb-6"
                  type="password"
                  placeholder="Confirm Your Password"
                />
              </div>

              <button className="bg-blue-500 hover:bg-blue-700 rounded-full p-3 block mx-auto mt-8 w-64 font-bold text-white">
                Sign Up
              </button>
              <div class="mt-6">
                <div class="text-base">
                  <span>Already have an account? </span>
                  <Link
                    to="/login"
                    class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
