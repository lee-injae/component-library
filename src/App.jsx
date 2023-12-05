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

  const createCard = (cardData, hoverableBool = false) => {
      return cardData.map(card => (
        <Card key={card.title}
          className="card"
          hoverable={hoverableBool}
          onHover={hoverableBool ? () => console.log("hovered") : null}
        >
          <IconContext.Provider value={{ color: "blue"}}>
              <FaCloudUploadAlt 
                  className="cloud-upload-icon"
              />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
          </IconContext.Provider>
        </Card>
      ))
  }



  const card1 = createCard(cardData, false)
  const card2 = createCard(cardData, true)

  
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
      <div className="cards-container">
        <h1>CARDS</h1>
        {card1}
        {card2}
      </div>
    </>
  )
}

export default App


