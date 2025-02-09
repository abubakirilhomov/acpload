import React from 'react'

const Button = ({text, icon}) => {
  return (
    <button className="btn btn-info btn-outline hover:text-white px-10 py-7 text-lg rounded-lg">
        {text} {icon}
    </button>
  )
}

export default Button