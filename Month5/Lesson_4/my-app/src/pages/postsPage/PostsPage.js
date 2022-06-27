import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersAction, postUsersAction, showAndHideText} from "../../redux/actions/actions";
import {UsersList} from "../../components/usersList/UsersList";


function PostsPage () {
    const text = useSelector(state => state.titleReducer.title);
    const users = useSelector(state => state.usersReducer.users);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    const handleText = () => {
        dispatch(showAndHideText())
    }
    const handleUsers = () => {
        dispatch(getUsersAction())
    }
    const postUsers = () => {
        const data = {
            name: name,
            email: email
        }
        dispatch(postUsersAction(data))
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
            <br/><br/>
            <input type="text" value={name} name="name"  onChange={(e)=>setName(e.target.value) }/>
            <input type="email" value={email} name="email" onChange={(e) =>setEmail(e.target.value)}/>
            <button onClick={postUsers}>post user</button>
        </div>
    )
}

export default PostsPage;