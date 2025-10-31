import React from 'react'
import Gallery from '../img'
import "../App.css"

const ImgGallery = ({handleClick,selectedimg,scrollRef}) => {
  return (
    <>
     <div className="imgGallery" ref={scrollRef}>
          {Gallery.map((image, index) => (
            <img
              key={index}
              src={image.src}
              loading="lazy"
              className={`imgs ${selectedimg === index ? "selected" : ""}`}
              onClick={() => handleClick(image.src, index)}
            />
          ))}
        </div>
    </>
  )
}

export default ImgGallery