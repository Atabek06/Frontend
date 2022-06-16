import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import {useDispatch, useSelector} from "react-redux";
import UsersPage from "./pages/usersPage/UsersPage";

function App() {
    const dispatch = useDispatch();

    const renameText = () => {
        dispatch({type: "CHANGE_TITLE"})
    }
    const clearText = ()  => {
        dispatch({type: "CLEAR_TITLE"})
    }
  return (
    <div>
      <MainPage/>
        ---------------
      {/*<AboutPage/>*/}
        <UsersPage/>

      {/*  <button onClick={renameText}>change text</button>*/}
      {/*  <button onClick={clearText}>clear</button>*/}
    </div>
  );
}

export default App;
