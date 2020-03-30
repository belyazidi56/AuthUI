import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/Auth/UserContext";
export default function SignUp() {
  const user = useContext(UserContext);

  return (
    <>
      <div className="min-h-screen flex items-center text-center justify-center bg-gray-50  md:px-0 px-6">
        <div className="max-w-md w-full bg-white py-16 rounded-md">
          <div className="inner">
            <h1 className="font-bold text-3xl text-blue-800">
              Welcome My Friend !
            </h1>
            <h2 className="font-bold text-blue-400 text-md">
              Create Your Account Now
            </h2>

            {/*Error Message */}
            <p
              id="error"
              className={
                user.iserror
                  ? "text-red-700 bg-red-200 mt-5 rounded-lg p-5"
                  : "hidden"
              }
            >
              {user.errorMsg}
            </p>

            {/*Success Message */}
            <p
              id="success"
              className={
                user.issuccess
                  ? "text-green-700 bg-green-200 mt-5 rounded-lg p-5"
                  : "hidden"
              }
            >
              <strong className="block"> Done !</strong> You will receive a
              message in you email to activate account
            </p>
            <div className="mx-auto font-bold text-xl leading-8 mt-8">
              <input
                className="border border-gray-400 rounded-md p-3 mb-6"
                type="text"
                placeholder="Enter Your FullName"
                onChange={e => user.setFullname(e.target.value)}
              />
              <input
                className="border border-gray-400 rounded-md p-3 mb-6"
                type="text"
                placeholder="Enter Your Email"
                onChange={e => user.setEmail(e.target.value)}
              />
              <input
                className="border border-gray-400 rounded-md p-3 mb-6"
                type="password"
                placeholder="Create Your Password"
                onChange={e => user.setPassword(e.target.value)}
              />
              <input
                className="border border-gray-400 rounded-md p-3 mb-6"
                type="password"
                placeholder="Confirm Your Password"
                onChange={e => user.setConfpassword(e.target.value)}
              />
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-700 rounded-full p-3 block mx-auto mt-8 w-64 font-bold text-white"
              onClick={user.signup}
            >
              Sign Up
            </button>

            <div className="mt-6">
              <div className="text-base">
                <span>Already have an account? </span>
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
