import "./hero.scss";
import { motion } from "framer-motion";


export default function Hero() {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        },
    };

    // const sliderVariants = {
    //     initial: {
    //         x: 0,
    //     },
    //     animate: {
    //         x: "-490%",
    //         transition: {
    //             repeat: Infinity,
    //             repeatType: "mirror",
    //             duration: 20,
    //         },
    //     }
    // };   

  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div variants={textVariants} initial="initial" animate="animate" className="textContainer" >
                {/* <motion.h2 variants={textVariants}>RICARDO ZELANTE</motion.h2>
                <motion.h1 variants={textVariants}>Houston Wall Printing</motion.h1> */}
                <motion.div variants={textVariants} initial="initial" animate="animate" className="logo">
                    <img src="/logo.png" alt="logo" />
                </motion.div>
                <motion.div variants={textVariants} className="buttons" >
                    <a href="#PORTFOLIO">
                        <motion.button variants={textVariants}>Examples</motion.button>
                    </a>
                    <a href="#CONTACT">
                        <motion.button variants={textVariants}>Contact Us</motion.button>
                    </a>
                </motion.div>
                {/* <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" className="scrollButton" /> */}
            </motion.div>

            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>

        {/* <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
            Create Your Own Space
        </motion.div> */}
    </div>
  )
}
