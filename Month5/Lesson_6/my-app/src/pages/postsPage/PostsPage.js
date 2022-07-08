import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, getPostById } from '../../store/fetchSlice';
import { Table, Modal, Button } from 'react-bootstrap';

function PostPage() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.fetchReducer.posts);
    const post = useSelector(state => state.fetchReducer.post);
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(getPost())
    }, [])


    // 7 дз) создать GET запрос по одному посту и отобразить
    const getOnePost = (e) => {
        e.preventDefault()
        dispatch(getPostById(e.target.dataset.id))
        setShow(true);
    }

    const handleClose = () => setShow(false);

    return (
        <div>
            <h1>Posts</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.slice(0, 10).map(post =>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button data-id={post.id} onClick={getOnePost}>
                                    посмотреть
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Содержимое поста №{post.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body><b>TITLE</b> - {post.title}</Modal.Body>
                <Modal.Body> <b>BODY</b> - {post.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PostPage;