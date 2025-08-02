import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {useNavigate ,Link} from 'react-router-dom'
export default function SignUpForm() {
  const navigate = useNavigate()
  const {
    register, handleSubmit, formState: { errors }, reset,  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitting form...", data);
    const formdata = {...data,role:'user'}
    try {
      const res = await axios.post("https://akil-backend.onrender.com/signup",formdata)
      alert("signed up successfully",res)
      navigate('/verify')
      reset(); 
    } catch (err) {
      alert(err)
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up Today!</h2>
        <button className="flex items-center gap-2 justify-center w-full border border-gray-300 rounded-md py-2 cursor-pointer transition">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Logo"
            className="w-5 h-5"
          />
          <span className="font-medium text-sm text-gray-700">Sign Up with Google</span>
        </button>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">Or Sign Up with Email</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", { required: "Full name is required" })}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              {...register("email", { required: "Email is required" })}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-950 hover:bg-indigo-900 text-white font-semibold py-2 rounded transition"
          >
            Continue
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="login" className="text-indigo-700 font-semibold hover:underline">
            Login
          </Link>
        </p>

        <p className="mt-4 text-xs text-center text-gray-500">
          By clicking 'Continue', you acknowledge that you have read and accepted our{' '}
          <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and{' '}
          <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
