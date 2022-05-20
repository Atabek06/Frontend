import classes from "./header.module.css";



export const Header = () =>{
    return(
        <ul className="header">
            <li className={classes.link}>Home</li>
            <li className={classes.link}>About</li>
            <li className="link">Contacts</li>
        </ul>
    )
}