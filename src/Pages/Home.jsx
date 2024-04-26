import React from 'react'
import NavBar from '../Components/NavBar'
import { ImageSlider } from '../Components/ImageSlider'
const Home = () => {
    const images=[{path:require("../Sources/Imgs/Slider/1.webp")},{path:require("../Sources/Imgs/Slider/2.webp")},{path:require("../Sources/Imgs/Slider/3.webp")},{path:require("../Sources/Imgs/Slider/4.webp")}]
  return (
    <div className='w-full h-screen relative overflow-hidden'>
        <NavBar/>
        <ImageSlider images={images} className='w-full h-[50%] mt-5 lg:mt-0 lg:h-[75%]' underLines={true}/>
    </div>
  )
}

export default Home