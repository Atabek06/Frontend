import classes from "./header.module.css"

export const Header = () => {
    return(
        <ul className="Header">
            <li className={classes.link}>Home</li>
            <li className={classes.link}>About Us</li>
            <li className={classes.link}>Contacts</li>
        </ul>
    )
}