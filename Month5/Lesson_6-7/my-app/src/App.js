import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from "./pages/mainPage/MainPage";
import UsersPage from "./pages/usersPage/UsersPage";
import CreateUser from "./pages/createUser/CreateUser";
import PostsPage from "./pages/postsPage/PostsPage";

function App() {
  return (
    <div>
      <MainPage/>
        <br/><br/>
        <UsersPage/>
      <div className='container pt-5'>
        <CreateUser/>
          <PostsPage/>
      </div>
    </div>
  );
}

export default App;
