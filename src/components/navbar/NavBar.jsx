import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Houston Wall Murals
        </motion.span>
        <div className="social">
          {/* <a href="">
            <img src="/facebook.png" alt="" />
          </a> */}
          <a href="https://www.instagram.com/houstonwallmurals/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://wa.me/message/75ITC3OXG2YCL1">
            <img src="/whatsapp.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
