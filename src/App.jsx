import React from "react"
import './App.css'
import Badge from "./components/Badge/Badge"

const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink" ]


function App() {

  const squareBadges = colors.map(color => {
    return <Badge key={color} color={color} shape="square">
              Badge
            </Badge>
  })

  const pillBadges = colors.map(color => {
    return <Badge key={color} color={color} shape="pill">
            Badge
          </Badge>
  })

  return (
    <>
     {squareBadges}
     {pillBadges}
    </>
  )
}

export default App


