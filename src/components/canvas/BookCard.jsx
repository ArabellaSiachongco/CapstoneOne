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
    // Function to update dimensions
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Calculate book dimensions based on screen size
      let bookWidth = Math.min(width * 0.8, 900); // 80% of screen width up to 900px
      let bookHeight = Math.min(height * 0.8, 800); // 80% of screen height up to 800px
      
      // Maintain aspect ratio
      if (bookWidth / bookHeight > 1.2) { // If too wide
        bookWidth = bookHeight * 1.2;
      }
      
      setDimensions({
        width: bookWidth,
        height: bookHeight
      });
    };

    // Initial calculation
    updateDimensions();

    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <main className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="flipbook-container w-full max-w-6xl mx-auto">
        <HTMLFlipBook
          width={dimensions.width}
          height={dimensions.height}
          size="stretch"
          minWidth={300}
          minHeight={350}
          maxWidth={900}
          maxHeight={800}
          showCover={true}
          usePortrait={false}
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