import React from 'react'

const Button = ({children , variant="default"}) => {
    const variants = {
        default:"bg-red-500 text-white",
        primary :" text-red-500 border-red-500"
    }
  return (
    <button className={`${variants[variant]}`}   >{children}</button>
  )
}

export default Button