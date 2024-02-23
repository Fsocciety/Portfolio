import React from "react";
import avatar from "../../assets/avatar.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home-section" id="home">
      <div className="home">
        <motion.div
          className="text-wrapper"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="hello">Hello, I am</p>
          <h1 className="name">Uros Simeunovic</h1>
          <h3>Web Developer</h3>
          <p className="welcome">Welcome to my personal website</p>
        </motion.div>
        {/* <div className="image-wrapper">
          <img className="avatar" src={avatar} alt="avatar" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
