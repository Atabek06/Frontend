import React, { useEffect, useState } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, getOneUser, getUsers } from '../../store/usersListSlice';


function UsersPage() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersListReducer.users);
    const error = useSelector(state => state.usersListReducer.error);
    const user = useSelector(state => state.usersListReducer.user);
    const message = useSelector(state => state.usersListReducer.message); /* DZ LESSON 8 */

    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(getUsers());
        dispatch(createUser());
    }, [])

    const getOneUserInfo = (e) => {
        const id = e.target.dataset.id;
        dispatch(getOneUser(id));
        setShow(true);
    }

    const handleClose = () => setShow(false);

    return (
        <div>
            {error ? <h1> {error} </h1> : <h2>{message}</h2>} {/* DZ LESSON 8 */}
            <hr />
            {
                error
                    ?
                    <h1>{error}</h1>
                    :
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>email</th>
                                <th>Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td> {user.id} </td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button onClick={getOneUserInfo} data-id={user.id}>Посмотреть</button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{user.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body> {user.name}</Modal.Body>
                <Modal.Body> {user.username}</Modal.Body>
                <Modal.Body> {user.email}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default UsersPage