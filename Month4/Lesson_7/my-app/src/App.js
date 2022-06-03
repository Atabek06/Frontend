import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import MainPage from "./pages/mainPage/MainPage";
import Menu from "./components/menu/Menu";
import {Routes, Route} from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Description from "./components/description/Description";


function App() {
  return (
      <>
          <Menu/>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/contacts" element={<ContactsPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/description" element={<Description/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </>
  );
}

export default App;
