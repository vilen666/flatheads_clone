import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";

export const NavBar = () => {
    const control = useAnimation();
    const textSlidevar = {
        slide: { x: "-80%", transition: { delay: 0.8, duration: 80, ease: "linear", repeat: Infinity, repeatType: "loop", repeatDelay: 0 } }
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
    const [navOpen, setnavOpen] = useState(false);
    useEffect(() => {
        control.start("slide")
    }, []);
    useEffect(() => {
        navOpen ? control.start("open") : control.start("closed")
    }, [navOpen]);
    return (
        <>
            <div className='first_header w-full h-fit py-2 bg-[#c8ffe6] flex justify-center items-center tracking-wider text-2xl lg:text-sm font-[myFont2] font-bold'>
                <a href="#">AS SEEN ON SHARK TANK. GET 10% OFF. CODE SHARK10.</a>
            </div>
            <div className='text-slider h-fit w-full overflow-hidden'>
                <motion.div
                    className={`h-fit w-fit flex flex-grow-0 flex-shrink-0 flex-nowrap gap-32 items-center text-2xl lg:text-sm`}
                    initial={{x:0}}
                    animate={control}
                    onMouseEnter={() => { control.stop("slide") }}
                    onMouseLeave={() => { control.start("slide") }}
                    variants={textSlidevar}
                >
                    {textGoing}
                </motion.div>
            </div>
            <div className="social_links w-full h-fit flex items-center justify-end gap-2 pr-20 pt-7 mb-2 text-4xl lg:text-xl lg:m-0">
                <i class="ri-instagram-line cursor-pointer"></i>
                <i class="ri-facebook-circle-fill cursor-pointer"></i>
                <i class="ri-youtube-fill cursor-pointer"></i>
                <i class="ri-twitter-fill cursor-pointer"></i>
                <i class="ri-linkedin-fill cursor-pointer"></i>
            </div>
            <hr />
            <div className=" Navmain w-full h-fit flex flexitems-end justify-between lg:flex-nowrap lg:justify-end gap-[1.5vw] px-14 pt-5 ">
                <div className="logo text-6xl lg:text-3xl font-bold cursor-pointer">Flatheads</div>
                <div className="hidden lg:flex gap-12 uppercase flex-wrap pb-3">
                    {
                        navItems.map((items, key) => {
                            return (
                                <>
                                    <div className='items text-lg tracking-wider flex gap-1 items-end relative flex-wrap'>
                                        <NavItems items={items} />
                                    </div>
                                </>
                            )
                        }
                        )
                    }
                </div>
                <div className="hidden lg:flex icons text-2xl justify-center gap-4 ">
                    <motion.i class="ri-user-3-line cursor-pointer rounded-full inline w-fit h-fit px-3 py-2" whileHover={{ color: "white", backgroundColor: "black" }}></motion.i>
                    <motion.i class="ri-search-line cursor-pointer rounded-full inline w-fit h-fit px-3 py-2" whileHover={{ color: "white", backgroundColor: "black" }}></motion.i>
                    <motion.i class="ri-shopping-bag-4-line cursor-pointer rounded-full inline w-fit h-fit px-3 py-2" whileHover={{ color: "white", backgroundColor: "black" }}></motion.i>
                </div>
                <div className="mobilenav lg:hidden flex text-6xl gap-2 ">
                    <i class="ri-search-line cursor-pointer"></i>
                    <i class="ri-menu-fill cursor-pointer" onClick={() => { setnavOpen(prev => !prev) }}></i>
                    <i class="ri-shopping-bag-line cursor-pointer"></i>
                </div>
                <motion.div className='absolute w-full h-screen flex justify-end  top-0 left-0 lg:hidden overflow-y-scroll'
                    initial="closed"
                    animate={control}
                    variants={{
                        open: {
                            scaleX: 1,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                staggerChildren: 0.2,
                            }
                        },
                        closed: {
                            scaleX: 0,
                            opacity: 0,
                            transition: {
                                duration: 0.3,
                                staggerChildren:0.2,
                            }
                        }
                    }}
                    style={{
                        transformOrigin: "right"
                    }}
                >
                    <div className=' w-1/2 h-[125%] bg-slate-400 opacity-40' onClick={() => { setnavOpen(prev => !prev) }}></div>
                    <motion.div className='w-1/2 h-full bg-white flex flex-col px-3 py-3'>
                        <div className=' p-3 text-2xl flex justify-end cursor-pointer'>
                            <motion.i class="ri-close-line text-8xl"
                                whileHover={{ rotate: 180 }}
                                onClick={() => { setnavOpen(prev => !prev) }}></motion.i>
                        </div>
                        <div className='flex flex-col text-lg uppercase tracking-wider mb-3 h-fit' >
                            {navItems.map((item) => {
                                return (
                                    <NavItemsMobile item={item} className="p-2 cursor-pointer font-mono text-3xl" variants={{ open:{y:0,opacity:1,transition:{duration:0.2,staggerChildren:0.2}},closed:{y:6,opacity:0}}} />
                                )
                            })}
                        </div>
                        <div className='my-12 pl-12 text-5xl font-mono tracking-tight  capitalize cursor-pointer'>Log in</div>
                        <div className="icon mt-0 text-center">
                            <i class="ri-instagram-line w-[50%] h-fit py-2 font-mono cursor-pointer text-6xl border-opacity-30 border-2 border-slate-400 float-left"></i>
                            <i class="ri-instagram-line w-[50%] h-fit py-2 font-mono cursor-pointer text-6xl border-opacity-30 border-2 border-slate-400 float-left"></i>
                            <i class="ri-instagram-line w-[50%] h-fit py-2 font-mono cursor-pointer text-6xl border-opacity-30 border-2 border-slate-400 float-left"></i>
                            <i class="ri-instagram-line w-[50%] h-fit py-2 font-mono cursor-pointer text-6xl border-opacity-30 border-2 border-slate-400 float-left"></i>
                            <i class="ri-instagram-line w-[50%] h-fit py-2 font-mono cursor-pointer text-6xl border-opacity-30 border-2 border-slate-400 float-left"></i>
                            <i class="ri-instagram-line w-[50%] h-fit py-2 font-mono cursor-pointer text-6xl border-opacity-30 border-2 border-slate-400 float-left"></i>
                            <i class="ri-instagram-line w-[50%] h-fit py-2 font-mono cursor-pointer text-6xl border-opacity-30 border-2 border-slate-400 float-left"></i>
                        </div>
                    </motion.div>
                </motion.div>
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
            scaleY: 0,
            y: "100%",
            transition: {
                delay: 0,
                duration: 0,
            }
        },
        clicked:
        {
            opacity: 1,
            scaleY: 1,
            transition: {
                staggerChildren: 0.2,
                delay: 0,
            }
        }
    }
    const [navItemStart, setnavItemStart] = useState(false);
    useEffect(() => {
        navItemStart ? control.start("clicked") : control.start("initial")
    }, [navItemStart]);
    return (
        <>
            <div className='main h-fit bg-white relative flex items-end'
                onMouseEnter={() => setnavItemStart(true)}
                onMouseLeave={() => setnavItemStart(false)}
            >
                <div className='cursor-pointer'>{props.items.id}</div>
                <motion.div initial="initial" animate={control}
                    variants={{
                        initial: {
                            scaleX: 0,
                            y: 3
                        },
                        clicked: {
                            scaleX: 1
                        }
                    }} transition={{ duration: 0.3, }} style={{ transformOrigin: "left" }} className='w-[120%] h-[2px] bg-slate-700 z-[2] absolute pointer-events-none'></motion.div>
                {props.items.subId && <>
                    <i class="ri-arrow-drop-down-line text-4xl inline font-thin transform translate-y-2"></i>
                    <motion.div className='flex flex-col cursor-pointer absolute bg-white bottom-0 text-sm font-semibold gap-2 pt-5'
                        initial="initial"
                        animate={control}
                        variants={dropDownvar}
                        style={{
                            transformOrigin: "top"
                        }}>

                        {props.items.subId.map((subItem) => {
                            return (
                                <motion.div className=' capitalize text-nowrap '
                                    variants={{
                                        initial: {
                                            y: 3,
                                            opacity: 0,
                                            transition:
                                            {
                                                delay: 0.3,
                                            }
                                        },
                                        clicked: {
                                            y: 0,
                                            opacity: 1,
                                            transition:
                                            {
                                                duration: 0.1,
                                            }
                                        }
                                    }}
                                >{subItem.id}</motion.div>
                            )
                        })}

                    </motion.div>
                </>}
            </div>
        </>
    )
}
const NavItemsMobile = (props) => {
    const [clicked, setclicked] = useState(false);
    const control = useAnimation();
    useEffect(() => {
        (!clicked) ? control.start("closed") : control.start("open")
    }, [clicked]);
    return (
        <>
            <hr />
            <motion.div className={`${props.className}`} onClick={() => { setclicked(prev => !prev); }} variants={props.variants}>{props.item.id}
                {props.item.subId && <i class="ri-arrow-drop-down-line"></i>}
            </motion.div>
            {props.item.subId && clicked &&
                <motion.div className='px-6 text-sm py-2'
                    initial="closed"
                    animate={control}
                    variants={{closed:{},
                open:{
                    transition:{
                        staggerChildren:0.3
                    }
                }}}
                >
                    {
                        props.item.subId.map((items) => {
                            return (
                                <motion.div className='cursor-pointer text-2xl'
                                    variants={{
                                        closed: {
                                            y: 6,
                                            opacity: 0,
                                            transition: {
                                                duration: 0
                                            }
                                        },
                                        open: {
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                duration: 0.3
                                            }
                                        }
                                    }}
                                >
                                    {items.id}
                                </motion.div>
                            )
                        })
                    }
                </motion.div>}
            <hr />
        </>
    )
}
export default NavBar;
