import React from 'react';
import "/src/components/layouts/book.css"
import { useNavigate } from 'react-router-dom';
import { styles } from '/src/styles.js';
import { SectionWrapper, ScrollWrapper } from '/src/wrapper';
import transitory from '/src/constants/book_constitution/transitory.js';

const ArticleEighteen = () => {
    const navigate = useNavigate();
  

    // Handle Previous Article Button click
    const handlePrevArticleClick = () => {
      navigate("/articleSixteen"); 
    };
  
  return (
    <div className="text-spacing-3 leading-relaxed tracking-wide">
      <ScrollWrapper>
        <div>
          {/* Iterate through the declarations array */}
          {transitory.map((item) => (
            <div key={item.id} className="my-5">
              {/* Display Article Title and Subtitle */}
              <h5 className={styles.paragraphSubText}>{item.subtitle}</h5>
              <h4 className={`${styles.headText} mb-10`}>{item.title}</h4>

              <div>
                {/* <h5 className={styles.paragraphSubText}>Principles</h5> */}
                {item.sections.map((section, index) => (
                  <div key={index} className="my-4">
                    <h6 className={styles.sectionTitle}>{section.name}</h6>
                    <p className={styles.paragraphSubTextLower}>{section.paragraph}</p>
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

          </div>
        </div>
    </ScrollWrapper>
    </div>
  );
};

export default SectionWrapper(ArticleEighteen);
 