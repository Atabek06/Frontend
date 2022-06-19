import {useDispatch, useSelector} from "react-redux";
import {sayHelloAction} from "./actions/actions";
import MainPage from "./pages/mainPage/MainPage";


function App() {
    const dispatch = useDispatch();

    const title = useSelector(state => state.titleReducer.title)

    const sayHello = () => {
        dispatch(sayHelloAction("Atabek"))
    }

  return (
    <div>
        {/*------{title}------*/}
        {/*<button onClick={sayHello}>*/}
        {/*    Hello world*/}
        {/*</button>*/}
        <MainPage/>
    </div>
  );
}

export default App;
