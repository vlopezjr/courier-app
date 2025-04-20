import React from 'react'

const WhenDiv = ({prop, className, style, onClick, testid, children}) => {
    if(!prop){
        return null;
    }
    const handleClick = onClick || (() => {})

  return (
    <div 
      data-testid={testid} 
      onClick={handleClick} 
      className={className} 
      style={style}
      >
        {children}
    </div>
  )
}

export default WhenDiv;