import React from 'react'
import './LandingHeader.css'
function LandingHeader({title}) {
  return (
    <h1 className='landing_header'>{title}</h1>
  )
}

export default LandingHeader