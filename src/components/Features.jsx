// src/components/Features.jsx
import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { features } from "../constants";
import { SectionWrapper, ScrollWrapper } from "../wrapper";
import { textVariant } from "../utility/motion";
import { VerticalTimeline } from 'react-vertical-timeline-component';
import FeaturesCard from './canvas/FeaturesCard';

const Features = () => {
  return (
    <ScrollWrapper>
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.paragraphSubText} `}>
          Our Features
        </p>
        <h2 className={`${styles.headText}`}>
          Features
        </h2>
      </motion.div>
      
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {features.map((feature, index) => (
            <FeaturesCard
              key={index} 
              feature={feature} 
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
    </ScrollWrapper>
  );
};

export default SectionWrapper(Features);
