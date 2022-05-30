

function Users (props){
    return(
        <ul>{
            props.propUsers.map((user, key) =>{
                return(
                    <div>
                        <li key={key}>{user.name}</li>
                        <li key={key}>{user.id}</li>
                    </div>
                )
            })
        }

        </ul>
    )
}

export default Users