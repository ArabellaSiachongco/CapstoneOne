import React, { useState, useEffect } from "react";
import "../../layouts/book.css";
import { useNavigate } from "react-router-dom";
import { styles } from "../../../styles.js";
import { SectionWrapper, ScrollWrapper } from "../../../wrapper";
import { justice, laborSection, agrarian, housing, heal, girls, role, human } from "../../../constants/book_constitution/justice.js";
import { useDictionary } from "../../../utility/dictionaryAPI.js";

const ArticleThirteen = () => {
  const navigate = useNavigate();
  const { selectedWord, definition, tooltipPosition, handleTextSelection } =
    useDictionary();

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextArticleClick = () => {
    navigate("/articleFourteen");
  };

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
                    <h6 className={styles.paragraphSubText}>{section.name}</h6>
                    <p
                      onMouseUp={handleTextSelection}
                      className={styles.paragraphSubTextLower}
                    >
                      {section.paragraph}
                    </p>
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
                    <h6 className={styles.paragraphSubText}>{section.name}</h6>
                    <p
                      onMouseUp={handleTextSelection}
                      className={styles.paragraphSubTextLower}
                    >
                      {section.paragraph}
                    </p>
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
                    <h6 className={styles.paragraphSubText}>{section.name}</h6>
                    <p
                      onMouseUp={handleTextSelection}
                      className={styles.paragraphSubTextLower}
                    >
                      {section.paragraph}
                    </p>
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
                    <h6 className={styles.paragraphSubText}>{section.name}</h6>
                    <p
                      onMouseUp={handleTextSelection}
                      className={styles.paragraphSubTextLower}
                    >
                      {section.paragraph}
                    </p>
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
                    <h6 className={styles.paragraphSubText}>{section.name}</h6>
                    <p
                      onMouseUp={handleTextSelection}
                      className={styles.paragraphSubTextLower}
                    >
                      {section.paragraph}
                    </p>
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
                    <h6 className={styles.paragraphSubText}>{section.name}</h6>
                    <p
                      onMouseUp={handleTextSelection}
                      className={styles.paragraphSubTextLower}
                    >
                      {section.paragraph}
                    </p>
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
                    <h6 className={styles.paragraphSubText}>{section.name}</h6>
                    <p
                      onMouseUp={handleTextSelection}
                      className={styles.paragraphSubTextLower}
                    >
                      {section.paragraph}
                    </p>
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
                    <h6 className={styles.paragraphSubText}>{section.name}</h6>
                    <p
                      onMouseUp={handleTextSelection}
                      className={styles.paragraphSubTextLower}
                    >
                      {section.paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <br></br>

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

      {/* Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gray-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default SectionWrapper(ArticleThirteen);