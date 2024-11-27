import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./MainLayout";
import Navbar from "./components/Navbar";
import Lawyer from "./components/Lawyer";
import Helena from "./components/canvas/Helena";
import NavbarTop from "./components/NavbarTop"; 

import RA_12066 from "./components/RA_12066";
import Constitution from "./components/Constitution";

import Appointment from "./components/Appointment";
import AppointmentTable from "./components/canvas/AppointmentTable";
import AppointmentResult from "./components/canvas/AppointmentResult";

import Layout from "./components/Layout";

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

// NavbarWrapper to determine when to show Navbar
const NavbarWrapper = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname.startsWith("/articleOne") || location.pathname.startsWith("/chapterOne");
  const showNavbarAgain = location.pathname.startsWith("/helena") || location.pathname.startsWith("/lawyer-status");
  const showNavbarInside = location.pathname.startsWith("/appointment");
  
  return (
    <>
      {showNavbar && <Navbar />}
      {showNavbarAgain && <NavbarTop />}
      {showNavbarInside && <NavbarTop />}
      {children}
      
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <NavbarWrapper>
        <Routes>
          {/* Main Layout Route */}
          <Route path="/" element={<MainLayout />} />

          {/* Lawyers status window route */}
          <Route path="/lawyer-status" element={<Lawyer />} />
          
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointment-table" element={<AppointmentTable />} />
          <Route path="/appointment-result" element={<AppointmentResult />} />
          
          <Route path="/helena" element={<Helena />} />

          {/* For books with table of contents */}
          <Route path="/constitution" element={<Constitution />} />

          {/* Routes for articles */}
          <Route path="/articleOne" element={<Layout><ArticleOne /></Layout>} />
          <Route path="/articleTwo" element={<Layout><ArticleTwo /></Layout>} />
          <Route path="/articleThree" element={<Layout><ArticleThree /></Layout>} />
          <Route path="/articleFour" element={<Layout><ArticleFour /></Layout>} />
          <Route path="/articleFive" element={<Layout><ArticleFive /> </Layout>} />
          <Route path="/articleSix" element={<Layout><ArticleSix /> </Layout>} />
          <Route path="/articleSeven" element={<Layout><ArticleSeven /> </Layout>} />
          <Route path="/articleEight" element={<Layout><ArticleEight /> </Layout>} />
          <Route path="/articleNine" element={<Layout><ArticleNine /> </Layout>} />
          <Route path="/articleTen" element={<Layout><ArticleTen /> </Layout>} />
          <Route path="/articleEleven" element={<Layout><ArticleEleven /> </Layout>} />
          <Route path="/articleTwelve" element={<Layout><ArticleTwelve /> </Layout>} />
          <Route path="/articleThirteen" element={<Layout><ArticleThirteen /> </Layout>} />
          <Route path="/articleFourteen" element={<Layout><ArticleFourteen /> </Layout>} />
          <Route path="/articleFifteen" element={<Layout><ArticleFifteen /> </Layout>} />
          <Route path="/articleSixteen" element={<Layout><ArticleSixteen /> </Layout>} />
          <Route path="/articleSeventeen" element={<Layout><ArticleSeventeen /> </Layout>} />
          <Route path="/articleEighteen" element={<Layout><ArticleEighteen /> </Layout>} />

          {/* Routes for chapters */}
          <Route path="/RA_8371" element={<RA_12066 />} />
          <Route path="/chapterOne" element={<Layout><ChapterOne /></Layout>} />
          <Route path="/chapterTwo" element={<Layout> <ChapterTwo /></Layout>} />
          <Route path="/chapterThree" element={<Layout> <ChapterThree /></Layout>} />
          <Route path="/chapterFour" element={<Layout> <ChapterFour /></Layout>} />
          <Route path="/chapterFive" element={<Layout> <ChapterFive /></Layout>} />
          <Route path="/chapterSix" element={<Layout> <ChapterSix /></Layout>} />
          <Route path="/chapterSeven" element={<Layout> <ChapterSeven /></Layout>} />
          <Route path="/chapterEight" element={<Layout> <ChapterEight /></Layout>} />
          <Route path="/chapterNine" element={<Layout> <ChapterNine /></Layout>} />
          <Route path="/chapterTen" element={<Layout> <ChapterTen /></Layout>} />
          <Route path="/chapterEleven" element={<Layout> <ChapterEleven /></Layout>} />
          <Route path="/chapterTwelve" element={<Layout> <ChapterTwelve /></Layout>} />
        </Routes>
      </NavbarWrapper>
      {/* <NavbarTop/> */}
    </BrowserRouter>
  );
};

export default App;
