import React from 'react'
import "../App.css"
import Gallery from '../img'

const Text = ({selectedimg,background,prevsImg,nextImg}) => {
  return (
    <>
     <div
        className="cont animate-bg"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="bgCont">
          <div className="nameTag">
            <h1 style={{ color: `${Gallery[selectedimg].color}` }}>
              {Gallery[selectedimg].name}
            </h1>
            <p style={{ color: `${Gallery[selectedimg].desColor}` }}>
              {Gallery[selectedimg].description}
            </p>
          </div>
          <div className="btnss">
            <button className="btn1" onClick={() => prevsImg()}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="btn2" onClick={() => nextImg()}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Text