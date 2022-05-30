import classes from "./Users.module.css";


function Users (props) {
    return(
        <table>
                <tr className={classes.trr}>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                </tr>
            {
            props.propUsers.map((user, key) =>{
                return(
                        <tr className={classes.trr}>
                             <td key={key}>{user.id}</td>
                             <td key={key}>{user.name}</td>
                             <td key={key}>{user.username}</td>
                             <td key={key}>{user.email}</td>
                        </tr>
                )
            })
        }
        </table>
    )
}

export default Users;