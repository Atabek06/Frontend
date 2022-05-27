import './App.css';
import MainPage from "./pages/MainPage";
import InputPage from "./pages/InputPage";

function App() {
    const users = [
        {
          id: 1,
        name: "Aikut",
        age: 16,
        goal: "Dentist"
    },
        {
          id: 2,
            name: "Sanya",
            age: 16,
            goal: "CyberSport"
        },
        {
          id: 3,
            name: "Yan",
            age: 15,
            goal: "athlete"
        }
    ]
  return (
    <>
      <MainPage users={users}/>
        <InputPage/>
    </>
  );
}

export default App;