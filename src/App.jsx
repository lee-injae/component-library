import React from "react"
import './App.css'
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import TestimonialsWithoutPic from "./components/Testimonials/TestimonialsWithoutPic.jsx"
import TestimonialsWithPic from "./components/Testimonials/TestimonialsWithPic.jsx"

import { FaCloudUploadAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

import { data } from "./data.jsx"



function App() {

  const { badgeColors, 
    bannerData, 
    cardData, 
    testimonialWithPicData,
    testimonialWithoutPicData  
  } = data

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
              status={data.status}
        >
        <div>
          <img src={data.imgUrl} alt={data.alt}/>
          <p>{data.msg}</p>
        </div>
        <div>
          {includeSubtitle && data.subtitle && <p className="banner-p">{data.subtitle}</p>}
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

  const createTestimonialWithPic = (data) => {
    return data.map(testimonial => (
      <TestimonialsWithPic
        key={testimonial.name}
        className="testimonial-with-pic"
      >
        <img className="profile-img" src={testimonial.profileImage} alt={testimonial.name}/>
        <div className="testimonial-contents">
          <img src="../../assets/quotation.png" alt="quotation"/>
          <h3>{testimonial.message}</h3>
          <p>{testimonial.name}</p>
          <p>{testimonial.company}, {testimonial.role}</p>
        </div>
      </TestimonialsWithPic>
    ))
  }

  const createTestimonialWithoutPic = (data) => {
    return data.map(testimonial => (
      <TestimonialsWithoutPic
        key={testimonial.name}
        className="testimonial-without-pic"
      >
        <img src={testimonial.companyLogo} alt={`${testimonial.company}-logo`}/>
        <h3>"{testimonial.message}"</h3>
        <p>{testimonial.name} 
          <span className="blue-font"> / </span> 
          <span className="grey-font">{testimonial.company}, {testimonial.role}</span>
        </p>
      </TestimonialsWithoutPic>
    ))
  }



  const testinomialWithoutPic = createTestimonialWithoutPic(testimonialWithoutPicData)
  const testimonialWithPic = createTestimonialWithPic(testimonialWithPicData)
  const cardWithoutHover = createCard(cardData, false)
  const cardWithHover = createCard(cardData, true)
  const bannersWithoutSubtitles = createBanners(bannerData)
  const bannersWithSubtitles = createBanners(bannerData, true)
  const squareBadges = createBadges("square")
  const pillBadges = createBadges("pill")

  return (
    <div className="container">
      <div className="badges-container">
        <h1>BADGES</h1>
        <div>
          <h2>Square</h2> 
          {squareBadges}
        </div>
        <div>
          <h2>Pill</h2> 
          {pillBadges}
        </div>
      </div>
      <div className="banners-container">
        <h1>BANNERS</h1>
        <h2>MULTI LINE</h2>
        {bannersWithSubtitles}
        <h2>SINGLE LINE</h2>
        {bannersWithoutSubtitles}
      </div>
      <div className="cards-container">
        <h1>CARDS</h1>
        {cardWithoutHover}
        {cardWithHover}
      </div>
      <div className="testimonials-container">
        <h1>TESTIMONIALS</h1>
        <h2>WITH PIC</h2>
        {testimonialWithPic}
        <h2>WITHOUT PIC</h2>
        {testinomialWithoutPic}
      </div>
    </div>
  )
}

export default App


