import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import AboutPage from "./pages/aboutPage/AboutPage";

function App() {
  return (
   <div>
     <MainPage/>
       <AboutPage/>
       <ContactsPage/>
   </div>
  );
}

export default App;
