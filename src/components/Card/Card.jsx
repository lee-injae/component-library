import React from "react"
import classNames from "classnames"

export default function Card(  { children, className } ){
    
  

    return (
            <div 
                className={className}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
        

    )
}