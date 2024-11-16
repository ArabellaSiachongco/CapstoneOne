import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Book from "./components/Book"; 
import ArticleOne from "./components/book_content/ArticleOne"; 
import Navbar from "./components/Navbar";
import Lawyer  from "./components/Lawyer";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
