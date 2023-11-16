import React from "react"
import classnames from "classnames"

export default function Banner({ children, status, className }){
    const colorClass = (status) && `banner-${status}`
    const allClasses = classnames(colorClass, className)

    return(
        <div className={allClasses}>
            {children}
        </div>
    )
}