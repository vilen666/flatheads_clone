import React, { useEffect, useState } from 'react';
import { motion, stagger, useAnimation } from "framer-motion";

export const NavBar = () => {
    const control = useAnimation();
    const textSlidevar = {
        slide: { x: "-100%", transition: { delay: 0.8, duration: 80, ease: "linear", repeat: Infinity, repeatType: "loop", repeatDelay: 0 } }
    };
    const dropDownvar = {
        initial:
        {
            opacity: 0,
            scale: 0,
            y: "100%",
            transition: {
                delay: 0.5,
                duration: 0,
            }
        },
        clicked:
        {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
            }
        }
    }
    const textGoing = Array(15).fill(
        <p className='text-nowrap'>Due to overwhelming demand, order shipment times are delayed. Apologies for the inconvenience.</p>
    );
    const navItems = [{ id: "Retro +" }, { id: "Nostalgia" }, { id: "Chic sneak" }, { id: "wyn" }, { id: "classics", subId: [{ id: "Elipsis" }, { id: "luft" }, { id: "line sneakers" }] }, { id: "Tshirts" }, { id: "styched Collectives", subId: [{ id: "Elipsis" }, { id: "luft" }, { id: "line sneakers" }] }]
    useEffect(() => {
        control.start("slide")
    }, []);
    return (
        <>
            <div className='first_header w-full h-10 bg-[#c8ffe6] flex justify-center items-center tracking-wider text-sm font-[myFont2] font-bold'>
                <a href="#">AS SEEN ON SHARK TANK. GET 10% OFF. CODE SHARK10.</a>
            </div>
            <div className='text-slider h-fit w-full overflow-hidden'>
                <motion.div
                    className={`h-fit w-fit flex flex-grow-0 flex-shrink-0 flex-nowrap gap-32 items-center`}
                    animate={control}
                    onMouseEnter={() => { control.stop("slide") }}
                    onMouseLeave={() => { control.start("slide") }}
                    variants={textSlidevar}
                >
                    {textGoing}
                </motion.div>
            </div>
            <div className="social_links w-full h-fit flex items-center justify-end gap-2 pr-20 pt-7 text-xl">
                <i class="ri-instagram-line"></i>
                <i class="ri-facebook-circle-fill"></i>
                <i class="ri-youtube-fill"></i>
                <i class="ri-twitter-fill"></i>
                <i class="ri-linkedin-fill"></i>
            </div>
            <hr />
            <div className=" main w-full h-fit flex flex-shrink flex-grow-0 items-end justify-between gap-8 px-14 pt-5">
                <div className="logo text-3xl font-bold cursor-pointer">Flatheads</div>
                <div className="flex gap-12 uppercase">
                    {
                        navItems.map((items, key) => {
                            return (
                                <>
                                    <div className='item text-lg tracking-wider flex gap-1 items-end relative'>
                                        <NavItems items={items}/>
                                    </div>
                                </>
                            )
                        }
                        )
                    }
                </div>
                <div className="icons text-2xl flex items-end justify-center gap-6">
                    <i class="ri-user-3-line cursor-pointer"></i>
                    <i class="ri-search-line cursor-pointer"></i>
                    <i class="ri-shopping-bag-4-line cursor-pointer"></i>
                </div>
            </div>
        </>
    );
};
const NavItems = (props) => {
    const control = useAnimation();
    const dropDownvar = {
        initial:
        {
            opacity: 0,
            scale: 0,
            y: "120%",
            transition: {
                delay:1,
                duration: 0,
            }
        },
        clicked:
        {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren:0.2,
                delay:0,
            }
        }
    }
    const [navItemStart, setnavItemStart] = useState(false);
    useEffect(() => {
        navItemStart?control.start("clicked") : control.start("initial")
    }, [navItemStart]);
    return (
        <>
            <motion.div className='cursor-pointer'
                onHoverStart={()=>setnavItemStart(true)}
                onHoverEnd={()=>setnavItemStart(false)}
            >{props.items.id}</motion.div>
            <motion.div initial="initial" animate={control} 
            variants={{initial:{
                scaleX:0,
                y:3
            },
            clicked:{
                scaleX:1
            }
            }} transition={{duration:0.3,}} style={{transformOrigin:"left"}} className='w-[120%] h-[2px] bg-slate-700 absolute pointer-events-none'></motion.div>
             {props.items.subId && <> <i class="ri-arrow-drop-down-line text-4xl inline font-thin transform translate-y-2"></i>
            <motion.div className='flex flex-col cursor-pointer absolute bg-white bottom-0 transform text-sm font-semibold gap-2 z-20'
                initial="initial"
                onHoverStart={()=>setnavItemStart(true)}
                onHoverEnd={()=>setnavItemStart(false)}
                animate={control}
                variants={dropDownvar}
                style={{
                    transformOrigin: "top"
                }}>
                {props.items.subId.map((subItem) => {
                    return (
                        <motion.div className=' capitalize text-nowrap block '
                        onHoverStart={()=>setnavItemStart(true)}
                        onHoverEnd={()=>setnavItemStart(false)}
                        variants={{initial:{
                            y:3,
                            opacity:0,
                            transition:
                            {
                                delay:0.3,
                            }
                        },
                        clicked:{
                            y:0,
                            opacity:1,
                            transition:
                            {
                                duration:0.3,
                            }
                        }}}
                        >{subItem.id}</motion.div>
                    )
                })}
                </motion.div></>}
            </>
            )
}

            export default NavBar;
