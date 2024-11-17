import React from 'react';
import "/src/components/layouts/book.css";
import { useNavigate } from 'react-router-dom';
import { styles } from '/src/styles.js';
import { SectionWrapper, ScrollWrapper } from '/src/wrapper';

import chapterThree from '/src/constants/book_peoples_right/chapterThree.js';

const ChapterThree = () => {
  const navigate = useNavigate();

  const handleNextArticleClick = () => {
    navigate("/chapterFour");
  };

  const handlePrevArticleClick = () => {
    navigate("/chapterTwo");
  };

  return (
    <div className="text-spacing-3 leading-relaxed tracking-wide">
      <ScrollWrapper>
        <div>
          {chapterThree.map((item) => (
            <div key={item.id} className="my-5">
              {/* Chapter Title and Subtitle */}
              <h5 className={styles.paragraphSubText}>{item.subtitle}</h5>
              <h4 className={`${styles.headText} mb-10`}>{item.title}</h4>

              {/* Render Sections */}
              {item.sections.map((section, index) => (
                <div key={index} className="my-4">
                  <h6 className={styles.sectionTitle}>{section.name}</h6>
                  <h5 className={styles.paragraphSubText}>{section.subtitle}</h5>

                  {/* Handle Paragraph Structure */}
                  {Array.isArray(section.paragraph) ? (
                    section.paragraph.map((para, idx) => (
                      <div key={idx} className="my-2">
                        <h6 className={styles.sectionTitle}>{para.name}</h6>
                        {para.sub_paragraph && (
                          <p className={styles.paragraphSubText}>
                            <strong>{para.sub_paragraph}</strong>
                          </p>
                        )}
                        <p className={styles.paragraphSubTextLower}>
                          {para.paragraph}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className={styles.paragraphSubTextLower}>
                      {section.paragraph}
                    </p>
                  )}
                </div>
              ))}
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

export default SectionWrapper(ChapterThree);
