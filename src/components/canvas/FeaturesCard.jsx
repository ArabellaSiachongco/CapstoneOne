// src/components/FeaturesCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 
import { fadeIn } from "/src/utility/motion.js";


const FeaturesCard = ({ feature }) => {
  const navigate = useNavigate();
  
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: feature.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{feature.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {feature.subtitle} 
        </p>
      </div>
    
      {feature.points && (
  <ul className="mt-5 list-disc ml-5 space-y-2">
    {feature.points.map((point, index) => (
      <li
        key={`features-point-${index}`}
        className="text-gray-100 text-[14px] pl-1 tracking-wider cursor-pointer hover:underline"
        onClick={() => navigate(`${point.li}#${point.id}`)}
      >
        {point.text}
      </li>
    ))}
  </ul>
)}


      {feature.image && (
        <div className="flex justify-center mt-3">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-[50%] h-[50%] rounded-lg"
          />
        </div>
      )}
      
      {feature.tags && (
        <div className="flex flex-wrap gap-2 mt-3">
          {feature.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-[12px] px-2 py-1 rounded-lg ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}

      {feature.btn && (
        <div className="mt-5">
          <Link
            to={feature.btn}
            className="px-6 py-2 text-white border-2 rounded-lg text-sm font-semibold"
          >
            Learn More
          </Link>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

// Define PropTypes for the feature object
FeaturesCard.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired, // Assuming it's a URL or image path
    iconBg: PropTypes.string.isRequired,
    overview: PropTypes.string,
    update: PropTypes.string,
    born: PropTypes.string,
    color: PropTypes.string.isRequired,
    btn: PropTypes.string, // This can be an optional string (path for link)
    points: PropTypes.arrayOf(PropTypes.string), // Optional array of strings
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ), // Optional array of tag objects
    image: PropTypes.string, // Optional string (URL or path for the image)
  }).isRequired,
};

export default FeaturesCard;
