import React from "react";
import {useParams} from "react-router-dom";

const Blog = (props) => {
    const params = useParams();
    return(
        <div>
            <h1>{params.news}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, assumenda at commodi culpa dignissimo</p>
        </div>
    )
};

export default Blog;