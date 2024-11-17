import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Navbar from "./components/Navbar";
import Lawyer  from "./components/Lawyer";

import RA_8371 from "./components/RA_8371";
import Constitution from "./components/Constitution"; 

import ArticleOne from "./components/constitution_content/ArticleOne";
import ArticleTwo from "./components/constitution_content/ArticleTwo";
import ArticleThree from "./components/constitution_content/ArticleThree";
import ArticleFour from "./components/constitution_content/ArticleFour";
import ArticleFive from "./components/constitution_content/ArticleFive";
import ArticleSix from "./components/constitution_content/ArticleSix";
import ArticleSeven from "./components/constitution_content/ArticleSeven";
import ArticleEight from "./components/constitution_content/ArticleEight";
import ArticleNine from "./components/constitution_content/ArticleNine";
import ArticleTen from "./components/constitution_content/ArticleTen";
import ArticleEleven from "./components/constitution_content/ArticleEleven";
import ArticleTwelve from "./components/constitution_content/ArticleTwelve";
import ArticleThirteen from "./components/constitution_content/ArticleThirteen";
import ArticleFourteen from "./components/constitution_content/ArticleFourteen";
import ArticleFifteen from "./components/constitution_content/ArticleFifteen";
import ArticleSixteen from "./components/constitution_content/ArticleSixteen";
import ArticleSeventeen from "./components/constitution_content/ArticleSeventeen";
import ArticleEighteen from "./components/constitution_content/ArticleEighteen";

import ChapterOne from "./components/peoples_rights_content/ChapterOne";
import ChapterTwo from "./components/peoples_rights_content/ChapterTwo";
import ChapterThree from "./components/peoples_rights_content/ChapterThree";
import ChapterFour from "./components/peoples_rights_content/ChapterFour";
import ChapterFive from "./components/peoples_rights_content/ChapterFive";
import ChapterSix from "./components/peoples_rights_content/ChapterSix";
import ChapterSeven from "./components/peoples_rights_content/ChapterSeven";
import ChapterEight from "./components/peoples_rights_content/ChapterEight";
import ChapterNine from "./components/peoples_rights_content/ChapterNine";
import ChapterTen from "./components/peoples_rights_content/ChapterTen";
import ChapterEleven from "./components/peoples_rights_content/ChapterEleven";
import ChapterTwelve from "./components/peoples_rights_content/ChapterTwelve";

1

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
        
        {/* for books with table of contents  */}
        <Route path="/constitution" element={<Constitution />} />
        {/* route for books content  */}
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
        
        {/* route for chapters  */}
        <Route path="/RA_8371" element={<RA_8371 />} /> 
        {/* route for chapter content  */}
        <Route path="/chapterOne" element={<ChapterOne />} />
        <Route path="/chapterTwo" element={<ChapterTwo />} />
        <Route path="/chapterThree" element={<ChapterThree />} />
        <Route path="/chapterFour" element={<ChapterFour />} />
        <Route path="/chapterFive" element={<ChapterFive />} />
        <Route path="/chapterSix" element={<ChapterSix />} />
        <Route path="/chapterSeven" element={<ChapterSeven />} />
        <Route path="/chapterEight" element={<ChapterEight />} />
        <Route path="/chapterNine" element={<ChapterNine />} />
        <Route path="/chapterTen" element={<ChapterTen />} />
        <Route path="/chapterEleven" element={<ChapterEleven />} />
        <Route path="/chapterTwelve" element={<ChapterTwelve />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
