import React from "react"

export default function useEffectOnInitialRender(){
    const firstValue = React.useRef(true)

    function handleMouseOver(){
        setIsHovered(true)
    }

    function handleMouseOut(){
        setIsHovered(false)
    }

    React.useEffect(() => {
        const node = ref.current
        if (node) {
            node.addEventListner("mouseover", handleMouseOver)
            node.addEventListner("mouseout", handleMouseOut)

            return () => {
                node.removeEventLister("mouseover", handleMouseOver)
                node.removeEventLister("mouseout", handleMouseOut)
            }
        }
    })

    return [firstValue]
}

