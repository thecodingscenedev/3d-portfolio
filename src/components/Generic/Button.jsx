import React from 'react'

const Button = ({children,isBeam=false,className,onClick}) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {isBeam && (
        <span className='relative flex h-3 w-3'>
          <span className='btn-ping'></span>
          <span className='btn-ping_dot'></span>
        </span>
      )}
      {children}
    </button>
  )
}

export default Button
