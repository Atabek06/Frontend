import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import MainPage from "./pages/mainPage/MainPage";
import Menu from "./components/menu/Menu";
import {Routes, Route} from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Description from "./components/description/Description";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import BlogsPage from "./pages/blogsPage/Blogspage";
import Blog from "./components/blog/Blog";


function App() {
  return (
      <>
          <Menu/>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/contacts" element={<ContactsPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/description" element={<Description/>}/>
              <Route path="/portfolio" element={<PortfolioPage/>}/>
              <Route path="/blogs/:name" element={<Blog/>}></Route>
              <Route path="/blogs" element={<BlogsPage/>}></Route>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </>
  );
}

export default App;
