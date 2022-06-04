import classes from './menu.module.css'
import {Link, NavLink} from 'react-router-dom'

function Menu () {
    return (
        <ul className={classes.menu}>
            <li>
                <NavLink to="/" className={classes.link}>main page</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={classes.link}>about page</NavLink>
            </li>
            <li>
                <NavLink to="/contacts" className={classes.link}>contacts page</NavLink>
            </li>
            <li>
                <NavLink to="/blogs" className={classes.link}>blogs page</NavLink>
            </li>
        </ul>
    )
}

export default Menu;