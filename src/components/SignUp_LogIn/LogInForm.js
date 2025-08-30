"use client";

import Link from "next/link";

const LogInForm = () => (
    <div className="w-full md:w-1/2 p-16 lg:mx-16 max-w-lg">
        <h1 className="text-2xl font-bold mb-2">Log in to Exclusive</h1>
        <p className="flex  text-gray-700 text-base font-semibold mb-7 ">
            Enter your details below
        </p>
        <form className="flex flex-col gap-4 ">
            <input
                type="text"
                placeholder="Email or Phone Number"
                className="border-b p-2  focus:outline-none "
            />
            <input
                type="password"
                placeholder="Password"
                className="border-b p-2  focus:outline-none "
            />
            <div className="flex justify-between mt-4">
                <button
                    type="submit"
                    className=" bg-red-500 text-white p-2 px-8 rounded hover:bg-red-600 transition-colors"
                >
                    Log in
                </button>

                <button
                    type="button"
                    className="flex items-center justify-center   text-red-600 p-2 rounded hover:text-red-800 transition-colors"
                >
                    Forget Password?
                </button>
            </div>


        </form>
    </div>
);

export default LogInForm;