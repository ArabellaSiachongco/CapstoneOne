import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { userLink } from "../constants";
import { fadeIn, textVariant } from "../utility/motion";
import { SectionWrapper } from "../wrapper";
import PropTypes from "prop-types";

// UserCard component with responsive design
const UserCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full orange-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-25 h-25 object-contain" loading="lazy" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

UserCard.propTypes = {
  index: PropTypes.number.isRequired, 
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const User = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p id="user" className={styles.paragraphSubText}>Our Target</p>
        <h2 className={`${styles.headText} highlight-border`}>
          <span className="title-with-line">User</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wide"
      >
        Empowering lawyers with tools to simplify their practice and assisting students in navigating their academic and legal journeys.
      </motion.p>


      <div className="mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
        {userLink.map((user, index) => (
          <UserCard key={user.title} index={index} {...user} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(User);
