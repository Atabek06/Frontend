import classes from './footer.module.css'

function Footer () {
    return (
        <div>
            <ul className={classes.ul}>
                <li>О компании</li>
                <li>О Сайте</li>
                <li>Соц.сети</li>
                <li>Новости</li>
            </ul>
        </div>
    )
}
export default Footer;
