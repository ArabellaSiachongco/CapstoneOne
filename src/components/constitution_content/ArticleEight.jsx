import React from "react";
import "/src/components/layouts/book.css";
import { useNavigate } from "react-router-dom";
import { styles } from "/src/styles.js";
import { SectionWrapper, ScrollWrapper } from "/src/wrapper";
import judicial from "/src/constants/book_constitution/judicial.js";
import { useDictionary } from "/src/utility/dictionaryAPI.js";

const ArticleEight = () => {
  const navigate = useNavigate();
  const { selectedWord, definition, tooltipPosition, handleTextSelection } =
    useDictionary();

  // Handle Next Article Button click
  const handleNextArticleClick = () => {
    navigate("/articleNine");
  };

  // Handle Previous Article Button click
  const handlePrevArticleClick = () => {
    navigate("/articleSeven");
  };

  return (
    <div className="text-spacing-3 leading-relaxed tracking-wide">
      <ScrollWrapper>
        <div>
          {/* Iterate through the declarations array */}
          {judicial.map((item) => (
            <div key={item.id} className="my-5">
              {/* Display Article Title and Subtitle */}
              <h5 className={styles.paragraphSubText}>{item.subtitle}</h5>
              <h4 className={`${styles.headText} mb-10`}>{item.title}</h4>

              <div>
                {item.sections.map((section, index) => (
                  <div key={index} className="my-4">
                    <h6 className={styles.paragraphSubText}>{section.name}</h6>
                    <p
                      className={styles.paragraphSubTextLower}
                      onMouseUp={handleTextSelection}
                    >
                      {section.paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Word Selection and Definition Tooltip */}
          {selectedWord && (
            <div
              className="absolute bg-white p-4 shadow-lg rounded-lg max-w-xs text-black"
              style={{
                left: tooltipPosition.left,
                top: tooltipPosition.top,
                zIndex: 100,
              }}
            >
              <p className={styles.dictionaryText}>{selectedWord}</p>
              <hr className="border-2 mb-2" />
              <p>{definition}</p>
            </div>
          )}

          {/* Button Section */}
          <div className="mt-10 text-center flex justify-between">
            {/* Previous Article Button */}
            <button
              onClick={handlePrevArticleClick}
              className="px-6 py-2 border justify-end text-white rounded-lg hover:bg-gray-500"
            >
              Previous Article
            </button>

            {/* Next Article Button */}
            <button
              onClick={handleNextArticleClick}
              className="px-6 py-2 border justify-end text-white rounded-lg hover:bg-gray-500"
            >
              Next Article
            </button>
          </div>
        </div>
      </ScrollWrapper>
    </div>
  );
};

export default SectionWrapper(ArticleEight);
