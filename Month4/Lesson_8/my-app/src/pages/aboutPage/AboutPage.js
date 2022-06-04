import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function AboutPage () {
    const navigate = useNavigate()

    const backTo = () => {
        navigate("/portfolio", {replace: true, state:"hello"})
    }
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={backTo}>назад</button>
            <NavLink to="/description">description</NavLink>
        </div>
    )
}
export default AboutPage;