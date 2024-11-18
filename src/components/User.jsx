import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { userLink } from "../constants";
import { fadeIn, textVariant } from "../utility/motion";
import { SectionWrapper } from "../wrapper";

// UserCard component with responsive design
const UserCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-25 h-25 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const User = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p id="user" className={styles.paragraphSubText}>Overview</p>
        <h2 className={styles.headText}>User</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wide"
      >
        <p className={styles.paragraphSubTextLower}>
        Finding the right support and legal guidance is essential for making informed decisions during critical times. Our platform offers valuable resources to help individuals navigate complex situations, whether it's resolving disputes, understanding your rights, or seeking expert legal advice. With our tailored services, users of all backgrounds can feel confident and empowered to take the next step in their legal journey.
        </p>
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
