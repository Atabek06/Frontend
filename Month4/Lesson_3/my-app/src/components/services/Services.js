export const Services = (props) => {
    return(
        <ul>
            {props.services.map((el,key) => {
                return <li>key={key}>{el}</li>
            })}
        </ul>
    )
}