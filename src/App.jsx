import React from "react"
import './App.css'
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"



const badgeColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink" ]

const bannerData = [
  {
    "title" : "success",
    "color" : "green", 
    "imgUrl" : "/assets/check-circle.png",
    "msg": "Congratulations!",
    "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
  },
  {
    "title" : "warning",
    "color" : "yellow",
    "imgUrl" : "/assets/check-circle.png",
    "msg": "Attention",
    "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
  }, 
  {
    "title" : "error",
    "color" : "red",
    "imgUrl" : "/assets/check-circle.png",
    "msg": "There is a prioblem with your application",
    "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."

  }, 
  {
    "title" : "neutral",
    "color" : "indigo",
    "imgUrl" : "/assets/blue-info.png",
    "msg": "Update available",
    "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
  }
]

const bannerColors = ["green", "yellow", "red", "indigo"]

const bannerTitles = ["Congratulations!", "Attention", "There is a prioblem with your application", "Update available"]
const bannerSubtitles = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." ]

function App() {

  const createBadges = (variant) => {
    return badgeColors.map(color => (
      <Badge key={`${variant}-${color}`} color={color} variant={variant} className="badge">
        Badge
      </Badge>
    ))
  }

  const hehe = bannerData.map( data => (
    <Banner key={`banner-${data.color}`}>
      <img src={data.imgUrl}/>
      {data.msg}
    </Banner>
  )

  )



  const squareBadges = createBadges("square")
  const pillBadges = createBadges("pill")

  return (
    <>
      <div>
        <h1 className="">BADGES</h1>
        <div>
          <h2>Square</h2> 
          {squareBadges}
        </div>
        <div>
          <h2>Pill</h2> 
          {pillBadges}
        </div>
      </div>
      <div>
        <h1>BANNERS</h1>
        {/* <Banner className="banner" color="green">
          <img src="/assets/check-circle.png" alt="green-check-circle"/>
          Congratulations!
        </Banner> */}
        {hehe}
      </div>
    </>
  )
}

export default App


