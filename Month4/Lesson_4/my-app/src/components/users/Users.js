function Users(props) {
    const users = props.users.map((user, key) => {
        return (
            <li style={{marginBottom: "25px", listStyleType: "none"}} key={key}>
                <div>name: {user.name}</div>
                <div>age: {user.age}</div>
                <div>position: {user.position}</div>
            </li>
        )
    })
    return (
        <ul>
            {users}
        </ul>
    )
}

export default Users;