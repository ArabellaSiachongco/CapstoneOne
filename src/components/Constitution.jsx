import { Link } from "react-router-dom";
import { React, useEffect } from "react";
import { motion } from "framer-motion"; 
import { styles } from "../styles";
import "./layouts/book.css";
import { table_of_content_constitution } from "../constants/table_of_content";
import { SectionWrapper, ScrollWrapper } from "/src/wrapper";
import { fadeIn } from "../utility/motion";

const Constitution = () => {
  return (
    <ScrollWrapper>
    <div id="Constitution_ID" className="p-8 min-h-screen text-center image-border-table">
      {/* Constitution Intro */}
      <div className="mb-16">
        <motion.p
          variants={fadeIn("top", "tween", 0.1, 0.6)}
          initial="hidden"
          animate="show"
          className={`${styles.paragraphSubTextLower} text-white mb-2`}
        >
          <em>Principles</em>
        </motion.p>
        <motion.h3
          variants={fadeIn("top", "tween", 0.2, 0.8)}
          initial="hidden"
          animate="show"
          className={`${styles.paragraphSubText} text-white mb-4`}
        >
          <strong>THE 1987 CONSTITUTION</strong>
        </motion.h3>
        <motion.h1
          variants={fadeIn("top", "tween", 0.3, 1)}
          initial="hidden"
          animate="show"
          className={`${styles.paragraphHeadText} text-white mb-6`}
        >
          <strong className="tracking-wide">THE CONSTITUTION OF THE REPUBLIC OF THE PHILIPPINES</strong>
        </motion.h1>
        <motion.p
          variants={fadeIn("top", "tween", 0.4, 1.2)}
          initial="hidden"
          animate="show"
          className={`${styles.paragraphSubTextLower} text-white mb-12`}
        >
          <strong>PREAMBLE:</strong> <br />
          We, the sovereign Filipino people, imploring the aid of Almighty God,
          in order to build a just and humane society and establish a Government
          that shall embody our ideals and aspirations, promote the common good,
          conserve and develop our patrimony, and secure to ourselves and our
          posterity the blessings of independence and democracy under the rule
          of law and a regime of truth, justice, freedom, love, equality, and
          peace, do ordain and promulgate this Constitution.
        </motion.p>
      </div>

      {/* Table of Contents */}
      <div className="mb-12">
        <motion.h3
          variants={fadeIn("top", "tween", 0.5, 1.2)}
          initial="hidden"
          animate="show"
          className={`${styles.paragraphSubText} text-white text-2xl font-semibold`}
        >
          Table of Contents
        </motion.h3>
        <motion.hr
          variants={fadeIn("top", "tween", 0.6, 1.2)}
          initial="hidden"
          animate="show"
          className="w-20 mx-auto border-t-2 border-white my-4"
        />
      </div>

      {/* Links to Table of Contents */}
      <motion.div
        variants={fadeIn("bottom", "tween", 0.7, 1)}
        initial="hidden"
        animate="show"
        className="space-y-4 text-left max-w-3xl mx-auto"
      >
        {table_of_content_constitution.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`${styles.paragraphSubText} text-white hover:underline hover:text-purple-400 block py-2 px-4 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg`}
          >
            {item.topic}
          </Link>
        ))}
      </motion.div>
    </div>
    </ScrollWrapper>
  );
};

export default SectionWrapper(Constitution, "Constitution");