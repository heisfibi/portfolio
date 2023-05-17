import React from 'react'

function Container({children, className, contentClassNmae}) { 
  return (
    <div className={`main-container ${className}`}>
        <div className={`content-container h-full ${contentClassNmae}`}>{children}</div>
    </div>
  )
}

export default Container