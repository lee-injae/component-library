import React from "react"
import useHover from "../../hooks/useHover"
import classNames from "classnames"

export default function Card({ children, className, onHover, initialHover }){
    const [hoverRef, isHovered]= useHover({initialHover})
  
    return (     
        <div ref={hoverRef} 
            style={{ 
                backgroundColor: isHovered ? "lightblue" : "white"
            }}
            className={className}>
            {children}
        </div>
    )
}