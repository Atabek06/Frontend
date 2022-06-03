import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import MainPage from "./pages/mainPage/MainPage";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/contacts" element={<ContactsPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
          </Routes>
      </>
  );
}

export default App;
