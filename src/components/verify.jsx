import React, { useState, useEffect, useRef } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'

export default function VerifyEmail() {
  const navigate = useNavigate()
  const [code, setCode] = useState(['', '', '', ''])
  const inputsRef = useRef([])
  const [loading,setloading] = useState(false)
   
  const [timer, setTimer] = useState(60)

  // Countdown effect
  useEffect(() => {
    if (timer <= 0) return
    const countdown = setInterval(() => setTimer(t => t - 1), 1000)
    return () => clearInterval(countdown)
  }, [timer])

  // Handle input change
  const handleChange = (e, idx) => {
    const val = e.target.value
    if (!/^\d?$/.test(val)) return // only digits, max 1 character

    const newCode = [...code]
    newCode[idx] = val
    setCode(newCode)

    // Focus next input if available and input is filled
    if (val && idx < 3) {
      inputsRef.current[idx + 1].focus()
    }
  }

  // Handle backspace to move back focus
  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !code[idx] && idx > 0) {
      inputsRef.current[idx - 1].focus()
    }
  }

  // You can add submit handler here if needed
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{

      setloading(true)
      const OTP= code.join('')
      const email = localStorage.getItem('pendingemail')
      console.log(email)
      console.log(OTP)
      await axios.post('https://akil-backend.onrender.com/verify-email',{email , OTP})     
      navigate('/login')
     }
     catch(err){
      console.log(err)
     }
     setloading(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Verify Email</h1>
        <p className="text-gray-600 mb-8">
          We have sent a verification code to your email. Please enter the 4-digit code below to verify your account.
        </p>

        <form onSubmit={handleSubmit} className="flex justify-center space-x-4 mb-6">
          {code.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-14 h-14 text-center border border-gray-300 rounded-md text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={digit}
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={el => inputsRef.current[idx] = el}
              autoComplete="one-time-code"
            />
          ))}
        </form>

        <button
          // type="submit"
          onClick={handleSubmit}
          className={`w-full py-2 rounded-md font-semibold transition text-white
            ${loading
              ? 'bg-blue-50 text-white cursor-not-allowed'
              : 'bg-indigo-700 cursor-pointer '}
          `}
          >
          {loading?"Wait.....":"Verify"}
        </button>

        <p className="mt-6 text-gray-500 text-sm">
          You can request to <span className="text-blue-500 font-bold">resend </span>the code{" "}
          <span className="font-semibold text-indigo-600">{timer}s</span>.
        </p>
      </div>
    </div>
  )
}
