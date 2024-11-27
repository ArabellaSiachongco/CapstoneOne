import React from "react";
import "../../components/layouts/book.css";
import { useNavigate } from "react-router-dom";
import { styles } from "../../styles.js";
import { SectionWrapper, ScrollWrapper } from "../../wrapper";
import chapterFive from "../../constants/book_peoples_right/chapterFive.js";
import { useDictionary } from "../../utility/dictionaryAPI.js";

const ChapterFive = () => {
  const navigate = useNavigate();
  const { selectedWord, definition, tooltipPosition, handleTextSelection } =
    useDictionary();

  const handleNextArticleClick = () => {
    navigate("/chapterSix");
  };

  const handlePrevArticleClick = () => {
    navigate("/chapterFour");
  };

  return (
    <div className="text-spacing-3 leading-relaxed tracking-wide">
      <ScrollWrapper>
        <div>
          {chapterFive.map((item) => (
            <div key={item.id} className="my-5">
              <h5 className={styles.paragraphSubText}>{item.subtitle}</h5>
              <h4 className={`${styles.headText} mb-10`}>{item.title}</h4>
              <div>
                {item.sections.map((sections, index) => (
                  <div key={index} className="my-4">
                    <h6 className={styles.paragraphSubText}>
                      {sections.name} {sections.subtitle}
                    </h6>
                    <p
                      onMouseUp={handleTextSelection}
                      className={styles.paragraphSubTextLower}
                    >
                      {sections.paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {selectedWord && (
            <div
              className="absolute text-left bg-white p-4 shadow-lg rounded-lg max-w-xs text-black"
              style={{
                left: tooltipPosition.left,
                top: tooltipPosition.top,
                zIndex: 100,
              }}
            >
              <div className="flex items-center justify-between">
                <p className={styles.dictionaryText}>{selectedWord}</p>
                {/* Icon aligned to the right */}
                <i className="fas fa-volume-up ml-5 text-gray-600"></i>
              </div>
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

export default SectionWrapper(ChapterFive);
