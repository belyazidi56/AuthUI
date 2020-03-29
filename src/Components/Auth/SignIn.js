import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <div className="min-h-screen flex items-center text-center justify-center bg-gray-50 ">
        <div className="max-w-md w-full bg-white p-16 rounded-md">
          <div className="inner">
            <h1 className="font-bold text-3xl text-blue-800">Welcome Back !</h1>
            <h2 className="font-bold text-blue-400 text-md">
              Sign in to your account
            </h2>
            <form>
              <div className="mx-auto font-bold text-xl leading-8 mt-16">
                <input
                  className="border border-gray-400 rounded-md p-3 mb-6"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <input
                  className="border border-gray-400 rounded-md p-3 mb-6"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div class="mt-6 flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label
                    for="remember_me"
                    class="ml-2 block text-sm leading-5 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div class="text-sm leading-5">
                  <Link
                    to="/reset"
                    class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 rounded-full p-3 block mx-auto mt-8 w-64 font-bold text-white">
                Sign In
              </button>
              <div class="mt-6">
                <div class="text-base">
                  <span>Don’t have an account? </span>
                  <Link
                    to="/register"
                    class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Sign up
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
