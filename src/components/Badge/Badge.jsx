import React from "react"
import classnames from "classnames"

export default function Badge({ children, color, variant, className }){
    let colorClass = color && `${color}`
    let variantClass = variant && `${variant}` 
    const allClasses = classnames(colorClass, variantClass, className)
   
    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}


