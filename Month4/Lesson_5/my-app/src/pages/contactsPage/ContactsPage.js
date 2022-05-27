import React, {useState} from "react";

function ContactsPage(){
    const [data, setData]= useState({username: "", age: 0})

    const onChangeValue = (e) => {
        e.preventDefault();
        setData({ ...data,[e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    return(
        <div>
            <input type="text" value={data.value} onChange={onChangeValue} name="username"/>
            <input type="number" value={data.age} onChange={onChangeValue} name="age"/>
            <button onClick={onSubmit}>отправить данные</button>
        </div>
    )
}

export default ContactsPage