import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import BlogPage from "./pages/blogPage/BlogPage";
import AdminPage from "./pages/adminPage/AdminPage";
import GuestPage from "./pages/guestPage/GuestPage";
import TestPage from "./pages/testPage/TestPage";
function App(props) {
      if(props.role === "admin"){
          return <TestPage/>
      }else if(props.role === "guest"){
          return <GuestPage/>
      }
}
// function App(){
//
// }

export default App;
