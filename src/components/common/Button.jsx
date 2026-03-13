import React from 'react'
import Icons from './Icons'

const Button = ( {className, text, icon}) => {
  return (
    <button className={`cursor-pointer ${className}`}>{text} <span><Icons icon={icon}/></span></button>
  )
}

export default Button