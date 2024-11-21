import React from 'react';
import "/src/components/layouts/book.css";
import national from '/src/constants/book_constitution/national.js';
import { useNavigate } from 'react-router-dom';
import { styles } from '/src/styles.js';
import { SectionWrapper, ScrollWrapper } from '/src/wrapper';
import { useDictionary } from '/src/utility/dictionaryAPI.js';

const ArticleOne = () => {
  const navigate = useNavigate();
  const { selectedWord, definition, handleTextSelection } = useDictionary();

  const handleNextArticleClick = () => {
    navigate(national[0].btn);
  };

  return (
    <div
      className="text-spacing-3 leading-relaxed tracking-wide image-border-national"
      onMouseUp={handleTextSelection} // Call handleTextSelection when text is selected
    >
      <ScrollWrapper>
        <div>
          {national.map((item) => (
            <div key={item.id} className="my-5">
              <h5 className={styles.paragraphSubText}>{item.subtitle}</h5>
              <h4 className={`${styles.headText} mb-10`}>{item.title}</h4>
              <p onMouseUp={handleTextSelection} className={styles.paragraphSubTextLower}>{item.paragraph}</p>
            </div>
          ))}

          {selectedWord && (
        <div
          className="absolute top-10 left-1/2 transform-translate-x-1/2 bg-white p-4 shadow-lg rounded-lg max-w-xs text-black"
          style={{ zIndex: 100 }}
        >
          <p className="font-bold">Word: {selectedWord}</p>
          <p>{definition}</p>
        </div>
      )}
          
          {/* Button Section */}
          <div className="mt-5 text-center">
            <hr/><br />
            <button
              onClick={handleNextArticleClick}
              className="px-6 py-2 border justify-end text-white rounded-lg hover:bg-gray-500 flex ml-auto"
            >
              <span className="text-xs">
                ARTICLE II
              </span>
            </button>
          </div>
        </div>
      </ScrollWrapper>

      
    </div>
  );
};

export default SectionWrapper(ArticleOne);
