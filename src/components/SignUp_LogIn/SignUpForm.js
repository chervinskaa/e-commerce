"use client";

import Link from "next/link";

const SignUpForm = () => (
    <div className="w-full md:w-1/2 p-16 lg:mx-16 max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Create an account</h1>
        <form className="flex flex-col gap-4">
            <input type="text" placeholder="Username" className="border-b p-2 focus:outline-none" />
            <input type="text" placeholder="Email or Phone Number" className="border-b p-2 focus:outline-none" />
            <input type="password" placeholder="Password" className="border-b p-2 focus:outline-none" />
            <button type="submit" className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors">
                Create Account
            </button>
            <button type="submit" className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-900 p-2 rounded hover:bg-gray-300 transition-colors">
                <img src="/regist_login/google.png" alt="Google-icon" className="w-7 h-7" />
                Sign up with Google
            </button>
            <p className="flex justify-center text-gray-700 text-base mt-3 gap-2">
                Already have an account? <Link href="/login" className="underline underline-offset-4 font-semibold">Log in</Link>
            </p>
        </form>
    </div>
);

export default SignUpForm;
