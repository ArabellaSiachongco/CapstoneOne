import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const LawyerStatusCard = ({ LawyerProfile, tags }) => {
  return (
    <div>
      {/* Tags Section */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap mt-4">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-violet-700 text-white text-xs font-semibold mr-2 mb-2 px-2 py-1 rounded"
            >
              {tag.title}
            </span>
          ))}
        </div>
      )}

      <motion.div
        className="max-w-md p-6 mt-5 bg-gradient-to-br bg-gray-900 rounded-lg shadow-lg relative text-white image-border-lawyer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image and Title */}
        <div className="flex flex-col items-center">
          <img
            src={LawyerProfile.image}
            alt={LawyerProfile.name}
            className="w-24 h-24 rounded-lg border-2 violet-gradient shadow-md"
            width={96} 
            height={96}
          />
          <h2 className="text-xl font-bold mt-2">{LawyerProfile.name}</h2>
          <p className="text-sm">{LawyerProfile.title}</p>
        </div>

        {/* Current Stats */}
        <div className="mt-4 text-sm">
          <p className="font-semibold">
            CURRENT SP:{" "}
            <span className="text-violet-400">{LawyerProfile.currentSP}</span>
          </p>
          <p className="font-semibold">
            CURRENT POINTS:{" "}
            <span className="text-violet-400">
              {LawyerProfile.currentPoints}
            </span>
          </p>
        </div>

        {/* Divider */}
        <hr className="my-4 border-white" />

        {/* Synchronization Message */}
        <div className="text-center text-xs text-violet-400 mb-4">
          <p>[SYSTEM SYNC] Status Initialization Complete</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="font-semibold">STATS</p>
            <p>Strength: {LawyerProfile.stats.strength}</p>
            <p>Endurance: {LawyerProfile.stats.endurance}</p>
            <p>Agility: {LawyerProfile.stats.agility}</p>
          </div>
          <div>
            <p className="font-semibold">TALENT</p>
            <p>{LawyerProfile.talent}</p>
            <p className="font-semibold mt-2">
              MASTERIES ({LawyerProfile.masteries}/3)
            </p>
            <p className="font-semibold mt-2">
              CONSTITUTIONS ({LawyerProfile.constitutions}/3)
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Adding prop types for LawyerStatusCard
LawyerStatusCard.propTypes = {
  LawyerProfile: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currentSP: PropTypes.number.isRequired,
    currentPoints: PropTypes.number.isRequired,
    stats: PropTypes.shape({
      strength: PropTypes.number.isRequired,
      endurance: PropTypes.number.isRequired,
      agility: PropTypes.number.isRequired,
    }).isRequired,
    talent: PropTypes.string.isRequired,
    masteries: PropTypes.number.isRequired,
    constitutions: PropTypes.number.isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default LawyerStatusCard;

