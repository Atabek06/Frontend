import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersAction, showAndHideText} from "../../redux/actions/actions";
import {UsersList} from "../../components/usersList/UsersList";


function PostsPage () {
    const text = useSelector(state => state.titleReducer.title);
    const users = useSelector(state => state.usersReducer.users)

    const dispatch = useDispatch()

    const handleText = () => {
        dispatch(showAndHideText())
    }

    const handleUsers = () => {
        dispatch(getUsersAction())
    }

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={handleText}>
                show text
            </button>

            <UsersList users={users}/>

            {console.log(users)}


            <button onClick={handleUsers}>get users</button>
            --------------
            <input type="text" name="name"/>
            <button>post user</button>
        </div>
    )
}

export default PostsPage;