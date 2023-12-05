import React from "react"

export default function useHover(initialValue = false) {
    const [isHovered, setIsHovered] = React.useState(initialValue)
    const ref = React.useRef(null)

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
    }, [])

    return [ref, isHovered]
}