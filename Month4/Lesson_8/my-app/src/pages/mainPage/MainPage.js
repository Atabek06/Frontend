import {useNavigate} from "react-router-dom";

const URL = 'https://jsonplaceholder.typicode.com/users';

function MainPage () {
    const navigate = useNavigate();
    const getUsers = () => {
        fetch(URL).then(response => {
            if (response.ok) {
                navigate('.portfolio', {replace: true})
            }
        })
    }
    return (
        <div>
            <h1>Main Page</h1>
            <button onClick={getUsers}>get users</button>
        </div>
    )
}
export default MainPage;