function Users(props){
    const users = props.users.map((user, key)=>{
        return(
            <li>
                <div>id: {user.id}</div>
                <div>name: {user.name}</div>
                <div>age: {user.age}</div>
                <div>position: {user.goal}</div>
            </li>
        )
    })
    return(
        <h3>{users}</h3>
    )
}

export default Users