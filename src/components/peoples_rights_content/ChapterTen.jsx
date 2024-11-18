import React from 'react';
import "/src/components/layouts/book.css"
import { useNavigate } from 'react-router-dom';
import { styles } from '/src/styles.js';
import { SectionWrapper, ScrollWrapper } from '/src/wrapper';

import chapterTen from '/src/constants/book_peoples_right/chapterTen.js';

const ChapterTen = () => {  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNextArticleClick = () => {
    navigate("/chapterEleven"); 
  };
  
    const handlePrevArticleClick = () => {
    navigate("/chapterNine"); 
    };
    
  
  return (
    <div className="text-spacing-3 leading-relaxed tracking-wide">
      <ScrollWrapper>
        <div>
          {chapterTen.map((item) => (
            <div key={item.id} className="my-5">
              <h5 className={styles.paragraphSubText}>{item.subtitle}</h5>
              <h4 className={`${styles.headText} mb-10`}>{item.title}</h4>
              <div>
                    {item.sections.map((sections, index) => (
                      <div key={index} className="my-4">
                        <h6 className={styles.sectionTitle}>{sections.name} {sections.subtitle}</h6>
                        <p className={styles.paragraphSubTextLower}>{sections.paragraph}</p>
                      </div>
                    ))}
                  </div>
            </div>
          ))}
          
         {/* Button Section */}
         <div className="mt-10 text-center flex justify-between">
            {/* Previous Article Button */}
            <button 
              onClick={handlePrevArticleClick}
              className="px-6 py-2 border justify-end text-white rounded-lg hover:bg-gray-500">
              Previous Article
            </button>

            {/* Next Article Button */}
            <button 
              onClick={handleNextArticleClick}
              className="px-6 py-2 border justify-end text-white rounded-lg hover:bg-gray-500">
              Next Article
            </button>
          </div>
        </div>
      </ScrollWrapper>
    </div>
  );
};

export default SectionWrapper(ChapterTen);
