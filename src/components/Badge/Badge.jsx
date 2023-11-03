import React from "react"
import classnames from "classnames"

export default function Badge({ children, color, variant, className }){
    const colorClass = color && `${color}`
    const variantClass = variant && `${variant}` 
    const allClasses = classnames(colorClass, variantClass, className)
   
    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}


