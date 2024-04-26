import React, { useEffect, useState,useRef } from 'react';
import { motion, useAnimation } from "framer-motion";

export const ImageSlider = ({ className = "w-[500px] h-[300px]", images, dots = false, underLines = false }) => {
    const [Counter, setCounter] = useState(0);
    let b=useRef(null)
    const [hoverFlag, setHoverFlag] = useState(false)
    const [img, setimg] = useState(images[Counter].path);
    const slideControl = useAnimation()
    const variants = {
        initial:
        {
            x: "50%",
            opacity: 0,
            transition: {
                duration: 0,
                delay: 0
            }
        },
        final:
        {
            x: "0%",
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0
            }
        }
    }
    function handleNext() {
        setCounter(prev => prev === images.length - 1 ? 0 : prev + 1)
    }
    function handlePrev() {
        setCounter(prev => prev === 0 ? images.length - 1 : prev - 1)
    }
    useEffect(() => {
        
        slideControl.start("initial")
        setimg(images[Counter].path)
        b.current=setTimeout(()=>slideControl.start("final"),100);
        return(()=>
        clearTimeout(b.current))
    }, [Counter]);
    return (
        <>
            <div className={`Slider relative overflow-hidden  ${className}`}>
                <motion.img src={img} alt={"not found"} animate={slideControl} variants={variants} className="w-full h-full bg-contain bg-black" />
                <button className='w-1/2 h-full top-0 left-0 absolute bg-transparent cursor-auto' onClick={handlePrev}
                    onMouseEnter={() => { setHoverFlag(true) }}
                    onMouseLeave={() => { setHoverFlag(false) }}
                ></button>
                <button className='w-1/2 h-full top-0 right-0 absolute cursor-auto' onClick={handleNext}
                    onMouseEnter={() => { setHoverFlag(true) }}
                    onMouseLeave={() => { setHoverFlag(false) }}
                ></button>
                {dots &&
                    <div className=' absolute bottom-2 left-1/2 p-2 bg-slate-500 rounded flex items-center justify-between gap-3 transform -translate-x-1/2'>
                        {images.map((_, key) => {
                            return (
                                <div key={key} className={` w-2 h-2 rounded-full ${Counter === key ? "bg-black" : "bg-white"}`}></div>
                            )
                        })}
                    </div>
                }
                {underLines &&
                    <div className=' absolute bottom-2 left-1/2 p-2 w-[70%] bg-transparent flex items-center justify-center gap-3 transform -translate-x-1/2'>
                        {images.map((_, key) => {
                            return (
                                <>
                                    <motion.div key={key} className={` w-[100px] h-2 bg-slate-50 cursor-pointer`}
                                    onClick={()=>setCounter(key)}>
                                        {
                                            key == Counter &&
                                            <motion.div className='h-full w-full bg-slate-600'
                                                style={{
                                                    transformOrigin: "left"
                                                }}
                                                initial={{ scaleX: 0 }}
                                                animate={!hoverFlag ? { scaleX: 1, transition: { delay: 0.5, duration: 5, ease: "linear" } } : {}}
                                                onAnimationComplete={() => !hoverFlag ? handleNext() : ""}
                                            />
                                        }
                                    </motion.div>
                                </>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}