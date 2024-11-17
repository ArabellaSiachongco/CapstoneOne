import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ArticleOne, ArticleTwo, ArticleThree, ArticleFour, ArticleFive, ArticleSix, ArticleSeven, ArticleEight, ArticleNine, ArticleTen, ArticleEleven, ArticleTwelve, ArticleThirteen, ArticleFourteen, ArticleFifteen, ArticleSixteen, ArticleSeventeen, ArticleEighteen } from "../book_content";
import "../layouts/Bookflip.css";
import { styles } from "../../styles";

const BookCard = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      let bookWidth = Math.min(width * 0.9, 900); // 90% of screen width up to 900px
      let bookHeight = Math.min(height * 0.75, 800); // 75% of screen height up to 800px

      // Maintain aspect ratio (landscape or portrait)
      if (bookWidth / bookHeight > 1.2) {
        bookWidth = bookHeight * 1.2;
      }

      setDimensions({
        width: bookWidth,
        height: bookHeight
      });
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flipbook-container w-full max-w-full flex justify-center">
        <HTMLFlipBook
          width={dimensions.width}
          height={dimensions.height}
          size="stretch"
          minWidth={300}
          minHeight={350}
          maxWidth={900}
          maxHeight={800}
          showCover={true}
          usePortrait={dimensions.width < 500} // Switch to portrait mode for narrow screens
          drawShadow={true}
          flippingTime={1000}
          className="flipbook"
        >
          {/* Cover Page */}
          <div className="page">
            <div className="page-cover image-border-book">
              <h2 className={`${styles.paragraphSubText} text-white text-center p-4 break-words`}>
                THE CONSTITUTION OF THE REPUBLIC OF THE PHILIPPINES
              </h2>
            </div>
          </div>

          {/* Articles Pages */}
          {[ArticleOne, ArticleTwo, ArticleThree, ArticleFour, ArticleFive,
            ArticleSix, ArticleSeven, ArticleEight, ArticleNine, ArticleTen,
            ArticleEleven, ArticleTwelve, ArticleThirteen, ArticleFourteen,
            ArticleFifteen, ArticleSixteen, ArticleSeventeen, ArticleEighteen
          ].map((Article, index) => (
            <div key={index} className="page">
              <div className="page-content overflow-y-auto">
                <Article />
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </main>
  );
};

export default BookCard;
