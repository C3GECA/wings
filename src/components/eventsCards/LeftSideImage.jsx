import { motion, useInView, useAnimation  } from "framer-motion"
import {useRef, useEffect} from "react"

export const LeftSideImage = ({title, description, imgSrc}) => {
    const ref = useRef(null); //referencing the element, initially to null
    const controls = useAnimation(); //controls the animation
    const isInView = useInView(ref, { rootMargin: "10px" }) //referenced margin to detect the element on screen

    useEffect(() => {
        if(isInView) {
            controls.start("move");
        } else{
            controls.start("initial");
        }
    }, [isInView, controls]);

    const animationVariantL = {
        initial: {
            x: "50%",
            opacity: 0.5,
            zIndex: 1
        },
        move:{
            x: "0%",
            opacity: 1,
            transition:{
                duaration: 0.1,
                ease: "easeInOut"
            }
        }
    }
    const animationVariantR = {
        initial: {
            x: "-50%",
            opacity: 0
        },
        move:{
            x: "0%",
            opacity: 1,
            transition:{
                duaration: 0.1,
                ease: "easeInOut"
            }
        }
    }

    const buttonVariants = {
        hover: {
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,225,225)",
            boxShadow: "0px 0px 8px rgb(255,215,255)",
        }
    }

    const imageVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3
            }
    }}

    return <div className="flex justify-center ">
        <div className=" flex justify-center h-96 w-8/12 mt-10 bg-black rounded-xl overflow-hidden" 
             > 
            <motion.div className="flex justify-center items-center w-1/2 bg-black"
                ref={ref}
                variants={animationVariantL}
                animate={controls}>
                    <motion.div variants={imageVariants} whileHover="hover" className="flex justify-center ">
                        <img src={imgSrc} alt={"bg"} ></img>
                    </motion.div>
            </motion.div>
            <motion.div className="flex flex-col justify-center w-1/2 text-white space-y-10 bg-black"
                ref={ref}
                variants={animationVariantR}
                animate={controls}>
                    <p className="text-center text-4xl font-semibold px-5">
                        {title}
                    </p>
                    <p className="text-center px-5 font-semibold ">{description}</p>
                    <div className="flex justify-center space-x-20 font-semibold">
                        <motion.button className="border-2 border-zinc-400 py-2 w-32 rounded-xl " 
                            onClick={() => window.open('/path/to/rulebook.pdf', '_blank')}
                            variants={buttonVariants}
                            whileHover="hover"
                            >
                                Rulebook
                        </motion.button>
                        <motion.button className="border-2 border-zinc-400  py-2 w-32 rounded-xl " 
                            onClick={() => window.location.href = "https://google.com"}
                            variants={buttonVariants}
                            whileHover="hover"
                            >
                                Register
                        </motion.button>
                    </div>
            </motion.div>      
        </div>
    </div>
}

