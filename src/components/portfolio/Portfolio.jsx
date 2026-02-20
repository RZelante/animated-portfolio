import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Portfolio() {
  const items = [
    {
      id: 1,
      title: "Web Presence",
      img: "/website.png",
      desc: "I built a website using React with Vite and Sass, showcasing a wall printing business with a clean, responsive design. The site features smooth animations and intuitive navigation, highlighting my ability to create engaging user experiences while effectively presenting my work. It uses emailjs for contact form functionality, demonstrating my skills in integrating third-party services to enhance user interaction.",
      url: "https://houstonwallmurals.com/",
      git: "https://github.com/RZelante/mywebsite",
    },
    {
      id: 2,
      title: "Chess",
      img: "https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg",
      desc: "I built an interactive chess app using vanilla JavaScript, modeling each piece’s movement, tracking board state, and enforcing core chess rules. Through DOM manipulation and event handling, I created a responsive UI that updates with every move. This project highlights my ability to design game logic, manage state, and build functional applications from scratch.",
      url: "https://chess-rz.netlify.app/",
      git: "https://github.com/RZelante/JS-Chess",
    },
    {
      id: 3,
      title: "Tic-Tac-Toe",
      img: "https://images.pexels.com/photos/28454508/pexels-photo-28454508.jpeg",
      desc: "I created a simple, responsive Tic-Tac-Toe game using vanilla JavaScript, handling player turns, win detection, and draw conditions through clean game-state logic. JavaScript controlled the board rendering and user interactions, updating the UI instantly with each move. This project demonstrates my ability to build interactive, logic-driven applications with efficient DOM manipulation.",
      url: "https://tictactoe-rz.netlify.app/",
      git: "https://github.com/RZelante/react-tic-tac-toe",
    },
    {
      id: 4,
      title: "Zelda",
      img: "https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg",
      desc: "I built a top-down, Zelda-inspired game using JavaScript, featuring character movement, enemy behavior, and collision detection. The game world updates dynamically, combining animation and game-state logic to create smooth, interactive gameplay. This project highlights my ability to build complex, action-based mechanics with pure JavaScript.",
      url: "https://zelda-rz.netlify.app/",
      git: "https://github.com/RZelante/JS-Zelda",
    },
    {
      id: 5,
      title: "Spotify Clone",
      img: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      desc: "I created a Spotify-inspired music streaming interface using React and Tailwind CSS, focusing on reusable components, responsive design, and clean UI architecture. The project recreates core Spotify features like playlists and a persistent player while emphasizing scalability and a polished user experience.",
      url: "https://spotifyclone-rz.netlify.app/",
      git: "https://github.com/RZelante/spotify-clone",
    },
    // {
    //   id: 6,
    //   title: "Netflix Clone",
    //   img: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg",
    //   desc: "I built a Netflix-inspired streaming interface using React and Tailwind CSS, featuring responsive layouts and reusable components. The project includes user profiles and a login system, along with dynamic content browsing and a polished, modern UI focused on scalability and user experience.",
    //   url: "https://flixclone-rz.netlify.app",
    //   git: "https://github.com/RZelante/netflix-clone",
    // },
    // {
    //   id: 6,
    //   title: "Social Media App",
    //   img: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
    //   desc: "I developed a full-stack social media application with a focus on scalable architecture and responsive design. The project includes user authentication, profiles, posts, and real-time interactions, combining a modern frontend with a robust backend to deliver a smooth, engaging user experience.",
    //   url: "",
    //   git: "",
    // },
  ];

  const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <div className="buttonContainer">
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
              </div>
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

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}
