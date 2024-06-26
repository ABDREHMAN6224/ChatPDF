"use client";
import React from 'react'

const TextInput = ({
    value,
    onChange,
    name,
    placeholder,
    type,
    required,
    disabled,
    error,
    errorMessage,
    className,
    label,
    startIcon,
    twstyles="w-full",
    ...props
}) => {
  return (
    <div className={`flex flex-col gap-3 text ${twstyles}`}>
      <label htmlFor={name} className="text-lg font-normal text-gray-900">{label}</label>
        <div className="flex items-center border w-full bg-transparent border-gray-50 rounded-md py-3 px-4 md:py-4 md:px-6 text-sm text-gray-400 focus:outline-none">
            {startIcon && <span className="mr-2 -ml-2">{startIcon}</span>}
            <input
                value={value}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                type={type}
                required={required}
                disabled={disabled}
                className={`w-full bg-transparent ${className} focus:outline-none placeholder:text-gray-200 `}
                {...props}
            />
            </div>
            {error && <p className="text-sm text-danger">{errorMessage}</p>}
      
    </div>
  )
}

export default TextInput