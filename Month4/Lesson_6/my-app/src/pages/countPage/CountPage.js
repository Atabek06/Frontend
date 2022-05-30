import React, {useState, useEffect} from "react";
const  URL = 'https://jsonplaceholder.typicode.com/users';


function CountPage () {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);
    const [test, setTest] = useState(false)

    useEffect( () => {
            fetch(URL)
                .then(response => response.json())
                .then(data => setUsers(data))
    }, [test])

    const  upCount = () => {
        setCount(count + 1);
    }

    const changeTest = () => {
        setTest(!test);
    }

    return(
        <div>
            <p>Вы нажали на кнопку {count} раз</p>
            <button onClick={changeTest}>change test</button>

            <ul>
                {users.map((user, key) => <li>{user.name}</li>
                )}
            </ul>
        </div>
    )
}

export default CountPage