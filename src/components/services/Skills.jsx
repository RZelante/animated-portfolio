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
        {/* <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping to grow your brand <br /> and move forward</p>
            <hr />
        </motion.div> */}

        <div className="carousel" >
            <h1>Transform Your Space - The Sky is the Limit</h1>
            <ul>
                <li data-accName="Item 1">
                    <img src="/coffee-shop-before.png" alt="" />
                </li>
                <li data-accName="Item 2">
                    <img src="/coffee-shop-render.png" alt="" />
                </li>
                <li data-accName="Item 3">
                    <img src="/office-2-before.png" alt="" />
                </li>
                <li data-accName="Item 4">
                    <img src="/office-2-render.png" alt="" />
                </li>
                <li data-accName="Item 5">
                    <img src="/office-before.png" alt="" />
                </li>
                <li data-accName="Item 6">
                    <img src="/office-render.png" alt="" />
                </li>
                <li data-accName="Item 7">
                    <img src="/hallway-before.png" alt="" />
                </li>
                <li data-accName="Item 8">
                    <img src="/hallway-render.png" alt="" />
                </li>
                <li data-accName="Item 9">
                    <img src="/gym-before.png" alt="" />
                </li>
                <li data-accName="Item 10">
                    <img src="/gym-render.png" alt="" />
                </li>
                <li data-accName="Item 11">
                    <img src="/bedroom-before.png" alt="" />
                </li>
                <li data-accName="Item 12">
                    <img src="/bedroom-render.png" alt="" />
                </li>
                <li data-accName="Item 13">
                    <img src="/bedroom-2-before.png" alt="" />
                </li>
                <li data-accName="Item 14">
                    <img src="/bedroom-2-render.png" alt="" />
                </li>
            </ul>
        </div>
        
    </motion.div>
  )
}
