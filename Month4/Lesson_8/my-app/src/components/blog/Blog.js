import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const Blog = (props) => {
    const params = useParams();
    console.log(useLocation())

    return (
        <div>
            <h1>{params.news}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quis?</p>
        </div>
    )
};

export default Blog;