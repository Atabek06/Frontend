import MainPage from "./pages/mainPage/MainPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import Menu from "./components/menu/Menu";
import {Routes, Route} from 'react-router-dom'
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import Description from "./components/description/Description";
import BlogsPage from "./pages/blogsPage/BlogsPage";
import Blog from "./components/blog/Blog";
import Layout from "./components/layout/Layout";
import LayoutBack from "./components/layoutBack/LayoutBack";


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={ <MainPage/> }/>
                    <Route path="/about" element={ <AboutPage/> }/>
                    <Route path="/contacts" element={ <ContactsPage/> }/>
                    <Route path="/portfolio" element={ <PortfolioPage/> }/>
                    <Route path="/description" element={ <Description/> }/>
                    <Route path="/blogs" element={ <BlogsPage/> }/>
                </Route>
                <Route path="/" element={<LayoutBack/>}>
                    <Route path="/blogs/:news" element={ <Blog/> }/>
                    <Route path="*" element={ <NotFound/> }/>
                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
