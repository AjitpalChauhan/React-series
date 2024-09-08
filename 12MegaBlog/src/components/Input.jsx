import React, { forwardRef } from 'react'
import { useId } from 'react'

const Input  = forwardRef( function Input({
  label,
  type = "text",
  className = "",
  ...porps
}, ref) {
  const Id = useId()
  return (
    
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'
      htmlFor={Id}>
        {label}</label>}
        <input type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full ${className}`}
        ref= {ref}
        {...porps}
        id={Id} 
        />
    </div>
  )
})

export default Input