import React from "react"
import useHover from "../../hooks/useHover"
import classNames from "classnames"

export default function Card({ children, className, onHover, hoverable }){
    const [hoverRef, isHovered]= useHover()
    
    const hoverStyle = (hoverable && isHovered) ? {
        backgroundColor: "purple",
        cursor : "pointer"
    } : {}

    return (     
        <div
            onMouseOver={onHover} 
            ref={hoverable ? hoverRef : null} 
            style={
                hoverStyle
            }
            className={className}>
            {children}
        </div>
    )
}