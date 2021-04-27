import React from "react";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="home">
        <motion.button whileHover={{ scale: 1.5 }} type="button">
          home
        </motion.button>
      </div>
      <div className="about">
        <motion.button whileHover={{ scale: 1.5 }} type="button">
          about
        </motion.button>
      </div>
      <div className="projects">
        <motion.button whileHover={{ scale: 1.5 }} type="button">
          projects
        </motion.button>
      </div>
      <div className="contact">
        <motion.button whileHover={{ scale: 1.5 }} type="button">
          contact
        </motion.button>
      </div>
    </div>
  );
};

export default Nav;
