import classes from "./Header.module.css"
import {Link, NavLink} from "react-router-dom";

function Header () {
    return(
            <ul className={classes.menu}>
                <li>
                    <NavLink to="/" className={classes.link}>Main Page</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={classes.link}> About Page</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className={classes.link}>Contacts Page</NavLink>
                </li>
            </ul>
    )
}

export default Header;