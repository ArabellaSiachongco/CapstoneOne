import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Book from "./components/Book"; 
import Navbar from "./components/Navbar";
import Lawyer  from "./components/Lawyer";

import ArticleOne from "./components/book_content/ArticleOne";
import ArticleTwo from "./components/book_content/ArticleTwo";
import ArticleThree from "./components/book_content/ArticleThree";
import ArticleFour from "./components/book_content/ArticleFour";
import ArticleFive from "./components/book_content/ArticleFive";
import ArticleSix from "./components/book_content/ArticleSix";
import ArticleSeven from "./components/book_content/ArticleSeven";
import ArticleEight from "./components/book_content/ArticleEight";
import ArticleNine from "./components/book_content/ArticleNine";
import ArticleTen from "./components/book_content/ArticleTen";
import ArticleEleven from "./components/book_content/ArticleEleven";
import ArticleTwelve from "./components/book_content/ArticleTwelve";
import ArticleThirteen from "./components/book_content/ArticleThirteen";
import ArticleFourteen from "./components/book_content/ArticleFourteen";
import ArticleFifteen from "./components/book_content/ArticleFifteen";
import ArticleSixteen from "./components/book_content/ArticleSixteen";
import ArticleSeventeen from "./components/book_content/ArticleSeventeen";
import ArticleEighteen from "./components/book_content/ArticleEighteen";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-primary">
        <Navbar />
      </div>
      <Routes>
        {/* Main Layout Route */}
        <Route path="/" element={<MainLayout />} />
        
        {/* lawyers status window route */}
        <Route path="/lawyer-status" element={<Lawyer />} />
        
        {/* route for books content  */}
        <Route path="/book" element={<Book />} />  
        <Route path="/articleOne" element={<ArticleOne />} />
        <Route path="/articleTwo" element={<ArticleTwo />} />
        <Route path="/articleThree" element={<ArticleThree />} />
        <Route path="/articleFour" element={<ArticleFour />} />
        <Route path="/articleFive" element={<ArticleFive />} />
        <Route path="/articleSix" element={<ArticleSix />} />
        <Route path="/articleSeven" element={<ArticleSeven />} />
        <Route path="/articleEight" element={<ArticleEight />} />
        <Route path="/articleNine" element={<ArticleNine />} />
        <Route path="/articleTen" element={<ArticleTen />} />
        <Route path="/articleEleven" element={<ArticleEleven />} />
        <Route path="/articleTwelve" element={<ArticleTwelve />} />
        <Route path="/articleThirteen" element={<ArticleThirteen />} />
        <Route path="/articleFourteen" element={<ArticleFourteen />} />
        <Route path="/articleFifteen" element={<ArticleFifteen />} />
        <Route path="/articleSixteen" element={<ArticleSixteen />} />
        <Route path="/articleSeventeen" element={<ArticleSeventeen />} />
        <Route path="/articleEighteen" element={<ArticleEighteen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
