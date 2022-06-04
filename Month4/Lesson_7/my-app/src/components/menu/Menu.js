import classes from "./menu.module.css"
import {Link, NavLink} from "react-router-dom";

function Menu () {
    return(
        <ul className={`${classes.menu} ${classes.menu2}`}>
            <li>
                <NavLink to="/" className={classes.link}> Main Page</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={classes.link}> About Page</NavLink>
            </li>
            <li>
                <NavLink to="/contacts" className={classes.link}> Contacts Page</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio" className={classes.link}> Portfolio Page</NavLink>
            </li>
            <li>
                <NavLink to="/blogs" className={classes.link}>blogs</NavLink>
            </li>
        </ul>
    )
}

export default Menu;