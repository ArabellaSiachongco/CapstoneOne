import React, { useState } from 'react';
import "/src/components/layouts/book.css";
import national from '/src/constants/book_constitution/national.js';
import { useNavigate } from 'react-router-dom';
import { styles } from '/src/styles.js';
import { SectionWrapper, ScrollWrapper } from '/src/wrapper';



const ArticleOne = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedWord, setSelectedWord] = useState(null); // Store selected word
  const [definition, setDefinition] = useState(null); // Store definition

  // Handle button click to navigate to the next article
  const handleNextArticleClick = () => {
    navigate(national[0].btn); // Navigate to the URL specified in national[0].btn ("/articleTwo")
  };

  // Function to handle text selection and fetch definition
  const handleTextSelection = () => {
    const selection = window.getSelection().toString().trim();
    if (selection) {
      setSelectedWord(selection); // Store selected word
      fetchDefinition(selection); // Fetch word definition
    } else {
      setSelectedWord(null); // Clear selected word if nothing is highlighted
    }
  };

  // Function to fetch word definition from Dictionary API
  const fetchDefinition = async (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setDefinition(data[0].meanings[0].definitions[0].definition); // Example format, adapt based on API response
      } else {
        setDefinition("No definition found.");
      }
    } catch (error) {
      console.error("Error fetching definition:", error);
      setDefinition("Error fetching definition.");
    }
  };

  return (
    <div
      className="text-spacing-3 leading-relaxed tracking-wide image-border-national"
      onMouseUp={handleTextSelection}
    >
      <ScrollWrapper>
        <div>
          {national.map((item) => (
            <div key={item.id} className="my-5">
              <h5 className={styles.paragraphSubText}>{item.subtitle}</h5>
              <h4 className={`${styles.headText} mb-10`}>{item.title}</h4>
              <p className={styles.paragraphSubTextLower}>{item.paragraph}</p>
            </div>
          ))}

          {/* Button Section */}
          <div className="mt-5 text-center">
          <hr/><br/>
            <button
              onClick={handleNextArticleClick}
              className="px-6 py-2 border justify-end text-white rounded-lg hover:bg-gray-500 flex ml-auto"
            >
              <span className='text-xs'>ARTICLE II Declaration of Principles and State Policies</span> &nbsp;
                <i className="fa-sharp fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </ScrollWrapper>

      {/* Display the definition of the selected word if available */}
      {selectedWord && (
        <div
          className="absolute top-10 left-1/2 transform-translate-x-1/2 bg-white p-4 shadow-lg rounded-lg max-w-xs text-black"
          style={{ zIndex: 100 }}
        >
          <p className="font-bold">Word: {selectedWord}</p>
          <p>{definition}</p>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(ArticleOne);
