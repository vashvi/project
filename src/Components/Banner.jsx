import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'


export default function Banner() {
  return (
    <div>
        <section className="banner">
        <div className="mask">
            <div className="color-mask"></div>
            </div> {/* Mask for banner */}
            <Carousel className="sliding">
            <Carousel.Item>
                <img
                src="https://img.freepik.com/free-photo/technology-bokeh-background-with-particle-lines_53876-104786.jpg?semt=ais_hybrid"
                alt="Technology background"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src="https://img.freepik.com/premium-photo/blue-futuristic-3d-sphere_202284-69.jpg?semt=ais_hybrid"
                alt="Futuristic 3D sphere"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src="https://img.freepik.com/premium-vector/sci-fi-tech-cyber-futuristic-design-concept-background_71775-218.jpg?semt=ais_hybrid"
                alt="Sci-fi tech background"
                />
            </Carousel.Item>
            </Carousel>
        </section>
      
    </div>
  )
}
