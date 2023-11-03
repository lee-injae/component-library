import React from "react"
import classnames from "classnames"

export default function Badge({ children, color, shape }){
    let colorClass = color ? `${color}` : ""
    let shapeClass = shape ? `${shape}` : ""
    const allClasses = classnames(colorClass, shapeClass)
   
    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}


