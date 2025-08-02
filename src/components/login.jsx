import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function Login() {
  const {
    register, handleSubmit, formState: { errors }, reset,  } = useForm();
  const onSubmit = async (data) => {
    console.log("Submitting form...", data)
    try {
      const res = await axios.post("https://akil-backend.onrender.com/signup",data)
      alert("signed up successfully",res)
      reset(); 
    } catch (err) {
      alert(err)
      console.error(err);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome Back , </h2>
        <div className="flex gap-10 my-6">
          <hr className="flex-grow  border-gray-300" />
          <hr className="flex-grow border-gray-300" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
          <button
            type="submit"
            className="w-full bg-blue-950 hover:bg-indigo-900 text-white font-semibold py-2 rounded transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-indigo-700 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
