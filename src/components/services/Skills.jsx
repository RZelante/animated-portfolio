import { useRef } from "react"
import "./skills.scss"
import { motion, useInView } from "framer-motion"

export default function Services() {

    const ref = useRef()

    const isInView = useInView(ref, {margin: "-200px"})

    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition : {
                duration: 1,
                staggerChildren: 0.2,
            }
        },
    }

  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate" ref={ref} animate="animate">
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping to grow your brand <br /> and move forward</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants} >
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Skills
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color: "orange"}}>Always</motion.b> Growing
                </h1>
                <a href="#Portfolio">
                    <motion.button whileTap={{ scale: 0.9 }}>WHAT I DO?</motion.button>
                </a>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}} whileTap={{ scale: 0.9 }} onClick={()=> window.location.href="https://react.dev/"}>
                    <img src="/react.png" alt="" />
                    <h2>React</h2>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}} whileTap={{ scale: 0.9 }} onClick={()=> window.location.href="https://www.python.org/"}>
                    <img src="/python.png" alt="" />
                    <h2>Python</h2>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}} whileTap={{ scale: 0.9 }} onClick={()=> window.location.href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"}>
                    <img src="/javascript.png" alt="" />
                    <h2>Javascript</h2>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}} whileTap={{ scale: 0.9 }} onClick={()=> window.location.href="https://www.w3schools.com/html/"}>
                    <img src="/html.png" alt="" />
                    <h2>HTML</h2>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}} whileTap={{ scale: 0.9 }} onClick={()=> window.location.href="https://www.w3schools.com/css/"}>
                    <img src="/css.png" alt="" />
                    <h2>CSS</h2>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}} whileTap={{ scale: 0.9 }} onClick={()=> window.location.href="https://developer.android.com/"}>
                    <img src="/android.png" alt="" />
                    <h2>Android</h2>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
