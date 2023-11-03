import React from "react"
import classnames from "classnames"

export default function Banner({ children, variant, className }){
    const colorClass = (variant) && `banner-${variant}`
    const allClasses = classnames(colorClass, className)

    return(
        <div className={allClasses}>
            {children}
        </div>
    )
}