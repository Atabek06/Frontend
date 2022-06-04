import React from 'react';
import {Outlet} from "react-router-dom"
import Back from "../back/Back";

const LayoutBack = (props) => (
    <div>
        <Back/>
        <Outlet/>
    </div>
);

export default LayoutBack;