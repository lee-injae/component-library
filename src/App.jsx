import React from "react"
import './App.css'
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"

import { FaCloudUploadAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

import { data } from "./data.jsx"



function App() {

  const {badgeColors, bannerData, cardData} = data

  const createBadges = (variant) => {
    return badgeColors.map(color => (
      <Badge key={`${variant}-${color}`} color={color} variant={variant} className="badge">
        Badge
      </Badge>
    ))
  }

  const createBanners = (bannerData, includeSubtitle = false) => {
    return bannerData.map( data => (
      <Banner key={`banner-${data.status}`} 
              className="banner" 
              status={data.status}>
        <img src={data.imgUrl} alt={data.alt}/>
        <div>
          {data.msg}
          {includeSubtitle && data.subtitle && <p>{data.subtitle}</p>}
        </div>
      </Banner>
    ))
  }

  const createCards = (cardData) => {
      return cardData.map(data => (
        <Card key={data.title}>
          <h3>{data.title}</h3>
          <p>{data.text}</p>
        </Card>
      ))
  }


  const card = createCards(cardData)
  const bannersWithoutSubtitles = createBanners(bannerData)
  const bannersWithSubtitles = createBanners(bannerData, true)
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
      <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
        <div>
          <h1>CARDS</h1>
          <FaCloudUploadAlt 
                className="cloud-upload-icon"
           />
          {card}
        </div>
      </IconContext.Provider>
    </>
  )
}

export default App


