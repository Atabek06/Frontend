import {NavLink, useNavigate} from "react-router-dom";

function AboutPage () {
    const navigate = useNavigate();

    return(
        <>
            <button onClick={() => navigate(-1)}>назад</button>
            <h1>About Page</h1>

            <NavLink to="/description">Description</NavLink>
        </>
    )
}

export default AboutPage