import React from 'react';
import Menu from "../menu/Menu";
import {Outlet} from "react-router-dom"

const Layout = (props) => (
    <div>
        <Menu/>
        <Outlet/>
    </div>
);

export default Layout;