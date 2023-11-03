import React from "react"
import './App.css'
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"



const badgeColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink" ]

const bannerData = [
  {
    "variant" : "success",
    "imgUrl" : "/assets/check-circle.png",
    "alt" : "icon",
    "msg": "Congratulations!",
    "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
  },
  {
    "variant" : "warning",
    "imgUrl" : "/assets/warning-exclamation.png",
    "alt" : "icon",
    "msg": "Attention",
    "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
  }, 
  {
    "variant" : "error",
    "imgUrl" : "/assets/x-circle.png",
    "alt" : "icon",
    "msg": "There is a prioblem with your application",
    "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."

  }, 
  {
    "variant" : "neutral",
    "imgUrl" : "/assets/blue-info.png",
    "alt" : "icon",
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

  const createBanners = (bannerData, includeSubtitle = false) => {
    return bannerData.map( data => (
      <Banner key={`banner-${data.variant}`} className="banner" variant={data.variant}>
        <img src={data.imgUrl} alt={data.alt}/>
        <div>
          {data.msg}
          {includeSubtitle && data.subtitle && <p>{data.subtitle}</p>}
        </div>
      </Banner>
    ))
  }

  const bannersWithoutSubtitles = createBanners(bannerData)
  const bannersWithSubtitles = createBanners(bannerData, true)

  // const createSingleLineBanner = bannerData.map( data => (
  //   <Banner key={`banner-${data.color}`} className="banner" color={data.color}>
  //     <img src={data.imgUrl}/>
  //     {data.msg}
  //   </Banner>
  // ))

  // const createMultiline = bannerData.map( data => (
  //   <Banner key={`banner-${data.color}`} className="banner" color={data.color}>
  //     <img src={data.imgUrl}/>
  //     {data.msg}
  //     <p>{data.subtitle}</p>
  //   </Banner>
  // ))


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
        {bannersWithoutSubtitles}
        {bannersWithSubtitles}
      </div>
    </>
  )
}

export default App


