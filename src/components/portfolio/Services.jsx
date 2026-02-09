import { useRef } from "react";
import "./services.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Services() {
  const items = [
    {
      id: 1,
      title: "We Print Murals — We Don’t Install Vinyl or Wallpaper",
      img: "",
      vid: "../../public/print-video.mp4",
      desc: "Our murals are printed directly onto your wall, creating a seamless, painted-on look without vinyl seams, bubbles, or peeling edges.",
      url: "https://chess-rz.netlify.app/",
      git: "https://github.com/RZelante/JS-Chess",
    },
    {
      id: 2,
      title: "Professional Results, Installed in Hours",
      img: "../../public/service.png",
      desc: "Traditional murals can take days or weeks. Our wall printing process delivers photo-realistic detail and clean installation in just a few hours — with minimal disruption to your space.",
      url: "https://tictactoe-rz.netlify.app/",
      git: "https://github.com/RZelante/react-tic-tac-toe",
    },
    {
      id: 3,
      title: "Custom Designed for Your Space",
      img: "",
      vid: "../../public/design-video-2.mp4",
      desc: "Every mural is designed specifically for your wall, your brand, and your vision. You’ll receive a free custom mockup before anything is printed.",
      url: "https://zelda-rz.netlify.app/",
      git: "https://github.com/RZelante/JS-Zelda",
    },
    {
      id: 4,
      title: "Clean, Precise, and Mess-Free",
      img: "../../public/mess.png",
      desc: "No brushes, no drips, no heavy odors. Our process is quiet, controlled, and ideal for businesses, homes, and professional environments.",
      url: "https://spotifyclone-rz.netlify.app/",
      git: "https://github.com/RZelante/spotify-clone",
    },
    {
      id: 5,
      title: "Durable, Long-Lasting Finish",
      img: "../../public/strong.png",
      desc: "Our murals are made to last. The ink bonds directly to the wall surface, creating a durable finish that won’t curl, lift, or shrink over time.",
      url: "https://flixclone-rz.netlify.app",
      git: "https://github.com/RZelante/netflix-clone",
    },
    {
      id: 6,
      title: "Local, Houston-Based Service",
      img: "",
      vid: "../../public/houston.mp4",
      desc: "We’re a Houston-based business, which means faster response times, local accountability, and service designed specifically for Houston spaces and businesses.",
      url: "",
      git: "",
    },
    {
      id: 7,
      title: "Clear Pricing. No Surprises.",
      img: "../../public/price.png",
      desc: "We price by square footage with transparent estimates, clear timelines, and no hidden fees. You’ll know exactly what to expect before we begin.",
      url: "",
      git: "",
    },
  ];

  const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end end"],
    });

    // const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
      <section id="SERVICES">
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              {(item.vid) ?  <video src={item.vid} autoPlay loop muted preload="auto" /> : <img src={item.img} alt="" />}
            </div>
            <motion.div className="textContainer">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              {/* <div className="buttonContainer">
                <a href={item.url}>
                  <motion.button whileTap={{ scale: 0.9 }}>
                    View Demo
                  </motion.button>
                </a>
                <a href={item.git}>
                  <motion.button
                    className="github-button"
                    whileTap={{ scale: 0.9 }}
                  >
                    GitHub
                  </motion.button>
                </a>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 10 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Why Choose Houston Wall Murals?</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}
