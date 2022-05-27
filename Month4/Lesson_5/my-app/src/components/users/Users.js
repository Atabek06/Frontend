

function Users (props){
    return(
        <ul>{
            props.propUsers.length > 0
            ?
            props.propUsers.map((user, key) =>{
                return(
                    <li key={key}>{user}</li>
                )
            })
                :
                <li>Данные пустые</li>
        }
            <li>
                <button onClick={props.getUsersProps}>get girls name</button>
            </li>
        </ul>
    )
}

export default Users