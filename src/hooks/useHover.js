import React from "react"

export default function useHover(initialValue = false) {
    const [isHovered, setIsHovered] = React.useState(initialValue)
    const ref = React.useRef(null)

    function handleMouseOver(){
        console.log("Mouse over triggered");
        setIsHovered(true)
    }

    function handleMouseOut(){
        console.log("Mouse out triggered");
        setIsHovered(false)
    }

    React.useEffect(() => {
        const node = ref.current
        if (node) {
            node.addEventListener("mouseover", handleMouseOver)
            node.addEventListener("mouseout", handleMouseOut)

            return () => {
                node.removeEventListener("mouseover", handleMouseOver)
                node.removeEventListener("mouseout", handleMouseOut)
            }
        }
    }, [])

    return [ref, isHovered]
}