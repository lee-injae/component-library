import React from "react"
import classnames from "classnames"

export default function Banner({ children, color, className }){
    const colorClass = (color) && `banner-${color}`
    const allClasses = classnames(colorClass, className)

    return(
        <div className={allClasses}>
            {children}
        </div>
    )
}