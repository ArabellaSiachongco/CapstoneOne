import React, { useState } from 'react';
import national from '/src/constants/book constitution/national.js';

// Dictionary of words and their definitions
const definitions = {
  "archipelago": "A group of islands scattered in a large body of water.",
  "terrestrial": "Relating to or occurring on the earth's land surface.",
  "fluvial": "Relating to or found in a river or stream.",
  "aerial": "Existing, happening, or operating in the air.",
  "territorial sea": "The belt of ocean immediately adjacent to a nation's shore.",
  "seabed": "The floor of the sea or ocean.",
  "subsoil": "The layer of earth lying immediately under the surface soil.",
  "insular": "Relating to or characteristic of an island.",
  "submarine": "Existing or occurring under the surface of the sea.",
  "sovereignty": "Supreme power or authority over a territory.",
  "jurisdiction": "The official power to make legal decisions and judgments.",
};

// Function to wrap words with highlight span
const highlightWords = (text) => {
  const words = Object.keys(definitions);
  let highlightedText = text;
  
  words.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    highlightedText = highlightedText.replace(regex, `<span class="highlighted-word" data-word="${word}">${word}</span>`);
  });
  
  return highlightedText;
};

const ArticleOne = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const handleWordClick = (e) => {
    if (e.target.classList.contains('highlighted-word')) {
      const word = e.target.dataset.word;
      const rect = e.target.getBoundingClientRect();
      
      setSelectedWord(word);
      setModalPosition({
        x: rect.left + window.scrollX,
        y: rect.bottom + window.scrollY
      });
    }
  };

  const closeModal = () => {
    setSelectedWord(null);
  };

  return (
    <div className="relative">
      {national.map((item) => (
        <div key={item.id} className="bg-white rounded-lg p-6 mb-6">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
            <h3 className="text-lg text-gray-600">{item.subtitle}</h3>
          </div>
          <div 
            className="text-base text-gray-700 text-justify leading-relaxed"
            onClick={handleWordClick}
            dangerouslySetInnerHTML={{
              __html: highlightWords(item.paragraph)
            }}
          />
        </div>
      ))}

      {/* Definition Modal */}
      {selectedWord && (
        <div 
          className="absolute bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 z-50"
          style={{
            left: `${modalPosition.x}px`,
            top: `${modalPosition.y + 10}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <button 
            onClick={closeModal}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center"
          >
            ×
          </button>
          <h4 className="font-semibold text-gray-800 mb-2">{selectedWord}</h4>
          <p className="text-sm text-gray-600">{definitions[selectedWord.toLowerCase()]}</p>
        </div>
      )}
    </div>
  );
};

export default ArticleOne;