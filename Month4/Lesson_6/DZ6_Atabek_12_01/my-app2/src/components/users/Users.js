import classes from "./Users.module.css";


function Users (props) {
    return(
        <table>
            {
            props.propUsers.map((user, key) =>{
                return(
                    <div>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                        </tr>
                        <tr>
                             <td key={key}>{user.id}</td>
                             <td key={key}>{user.name}</td>
                             <td key={key}>{user.username}</td>
                             <td key={key}>{user.email}</td>
                        </tr>
                    </div>


                )
            })
        }
        </table>
    )
}

export default Users;