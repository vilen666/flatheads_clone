import React, { useState } from 'react';
import { motion, useAnimation } from "framer-motion";

export const ImageSlider = ({ className = "w-[500px] h-[300px]", images, dots = false, underLines = false }) => {
    const [Counter, setCounter] = useState(0);
    const [hoverFlag, setHoverFlag] = useState(false)
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
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0
            }
        }
    }
    async function handleNext() {
        await slideControl.start("initial")
        setCounter(prev => prev === images.length - 1 ? 0 : prev + 1)
        slideControl.start("final")
    }
    async function handlePrev() {
        await slideControl.start("initial")
        setCounter(prev => prev === 0 ? images.length - 1 : prev - 1)
        slideControl.start("final")
    }
    const ImageComponent = React.lazy(() => import(`${images[Counter].path}`));
    return (
        <>
            <div className={`Slider relative overflow-hidden  ${className}`}>
                <motion.div animate={slideControl} variants={variants}  as={React.Suspense} fallback={<div>Loading...</div>} src={ImageComponent} alt={"image.alt"} className="w-full h-full bg-contain"   />
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
                                    <motion.div key={key} className={` w-[100px] h-2 bg-slate-50`}>
                                        {
                                            key == Counter &&
                                            <motion.div className='h-full w-full bg-slate-600'
                                                style={{
                                                    transformOrigin: "left"
                                                }}
                                                initial={{ scaleX: 0 }}
                                                animate={!hoverFlag ? { scaleX: 1, transition: { delay: 0.5, duration: 3, ease: "linear" } } : {}}
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