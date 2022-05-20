import classes from "./news.module.css";


export const News = () => {
    return(
        <>
            <ul className={classes.ull}>
                <li className={classes.link}>About Country</li>
                <li className={classes.link}>About Government</li>
                <li className={classes.link}>About Roads</li>
                <li className={classes.link}>About people</li>
            </ul>
        </>
    )
}