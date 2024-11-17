import React from 'react';
import "/src/components/layouts/book.css"
import { useNavigate } from 'react-router-dom';
import { styles } from '/src/styles.js';
import { SectionWrapper, ScrollWrapper } from '/src/wrapper';
import {justice, laborSection, agrarian, housing, heal, girls, role, human } from '/src/constants/book_constitution/justice.js'


const ArticleThirteen = () => {
    const navigate = useNavigate();
  
    // Handle Next Article Button click
    const handleNextArticleClick = () => {
      navigate("/articleFourteen"); 
    };
  
    // Handle Previous Article Button click
    const handlePrevArticleClick = () => {
      navigate("/articleTwelve"); 
    };
  
  return (
    <div className="text-spacing-3 leading-relaxed tracking-wide">
      <ScrollWrapper>
        <div>
          {/* Iterate through the declarations array */}
          {justice.map((item) => (
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
          <br></br>

          {laborSection.map((item) => (
            <div key={item.id} className="my-5">
              {/* Display Article Title and Subtitle */}
              <h5 className={styles.paragraphHeadText}>{item.title}</h5>
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
          <br></br>
          
          {agrarian.map((item) => (
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
          <br></br>
          
          {housing.map((item) => (
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
          <br></br>
          
          {heal.map((item) => (
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
          <br></br>
          
          {girls.map((item) => (
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
          <br></br>
          
          {role.map((item) => (
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
          <br></br>
          
          {human.map((item) => (
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
          <br></br>
          
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

export default SectionWrapper(ArticleThirteen);