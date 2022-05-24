import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

function App() {
    const users = [
        {
        name: "Dastan",
        age: 25,
        position: "Front-end"
    },
        {
            name: "Atabek",
            age: 16,
            position: "gameScientist"
        },
        {
            name: "Yan",
            age: 15,
            position: "athlete"
        }
    ]
  return (
    <>
      <MainPage users={users}/>
        <ContactsPage/>
    </>
  );
}

export default App;
