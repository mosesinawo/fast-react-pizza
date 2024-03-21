import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LinkButton({children, to}) {

    const style = 'text-sm text-blue-500 hover:text-blue-600 hover:underline '

    const navigate = useNavigate();

    if(to === '-1') return <button className={style} 
    onClick={() => navigate(-1)}>&larr;{children}</button>
  return (
    <Link to={to} 
    className={style}>&larr; 
    {children}</Link>

  )
}

export default LinkButton