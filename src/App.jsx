import React from "react"
import './App.css'
import Badge from "./components/Badge/Badge"

const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink" ]

function App() {

  const createBadges = (variant) => {
    return colors.map(color => (
      <Badge key={`${variant}-${color}`} color={color} variant={variant} className="badge">
        Badge
      </Badge>
    ))
  }

  const squareBadges = createBadges("square")
  const pillBadges = createBadges("pill")

  return (
    <>
      <div>
        <h1 className="">BADGES</h1>
        <div>
          <h2>Sqaure</h2> 
          {squareBadges}
        </div>
        <div>
          <h2>Pill</h2> 
          {pillBadges}
        </div>
      </div>
    </>
  )
}

export default App


