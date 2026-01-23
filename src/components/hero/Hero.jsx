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

    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-490%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
            },
        }
    };   

  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div variants={textVariants} initial="initial" animate="animate" className="textContainer" >
                <motion.h2 variants={textVariants}>RICARDO ZELANTE</motion.h2>
                <motion.h1 variants={textVariants}>Web/App Developer and UI Designer</motion.h1>
                <motion.div variants={textVariants} className="buttons" >
                    <a href="#Portfolio">
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    </a>
                    <a href="#Contact">
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </a>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>

        <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
            Writer Content Creator Designer
        </motion.div>

        <div className="imageContainer">
            <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}
