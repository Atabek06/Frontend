import React from 'react';
import {Nav} from "react-bootstrap";

function Menu(props) {
    return (
        <div>
            <Nav defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Main Page</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/users">Users page</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Menu;