import React from 'react';
import "/src/components/layouts/book.css"
import chapterOne from '/src/constants/book_peoples_right/chapterOne.js';
import { useNavigate } from 'react-router-dom';
import { styles } from '/src/styles.js';
import { SectionWrapper, ScrollWrapper } from '/src/wrapper';
import { useDictionary } from '/src/utility/dictionaryAPI.js';


const ChapterOne = () => {  
  const navigate = useNavigate(); // Initialize useNavigate
  const { selectedWord, definition, handleTextSelection } = useDictionary();

  const handleNextArticleClick = () => {
    navigate("/chapterTwo"); 
  };
  
  return (
    <div className="text-spacing-3 leading-relaxed tracking-wide image-border-national">
      <ScrollWrapper>
        <div>
          {chapterOne.map((item) => (
            <div key={item.id} className="my-5">
              <h5 className={styles.paragraphSubText}>{item.subtitle}</h5>
              <h4 className={`${styles.headText} mb-10`}>{item.title}</h4>
              <div>
                    {/* <h5 className={styles.paragraphSubText}>Principles</h5> */}
                    {item.sections.map((sections, index) => (
                      <div key={index} className="my-4">
                        <h6 className={styles.sectionTitle}>{sections.name}</h6>
                        <p onMouseUp={handleTextSelection} className={styles.paragraphSubTextLower}>{sections.paragraph}</p>
                      </div>
                    ))}
                  </div>
            </div>
          ))}
          
          {selectedWord && (
            <div
              className="absolute top-10 left-1/2 transform-translate-x-1/2 bg-white p-4 shadow-lg rounded-lg max-w-xs text-black"
              style={{ zIndex: 100 }}
            >
              <p className={styles.dictionaryText}>{selectedWord}</p><hr className='border-2 mb-2'/>
              <p>{definition}</p>
            </div>
          )}
          
          {/* Button Section */}
          <div className="mt-5 text-center">
            <button 
              onClick={handleNextArticleClick}
              className="px-6 py-2 border justify-end text-white rounded-lg hover:bg-gray-500 flex ml-auto">
              Next Chapter
            </button>
          </div>
        </div>
      </ScrollWrapper>
    </div>
  );
};

export default SectionWrapper(ChapterOne);
