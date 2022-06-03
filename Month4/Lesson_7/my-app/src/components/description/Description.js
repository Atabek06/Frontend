import {useNavigate} from "react-router-dom"


function Description () {

    const navigate = useNavigate()

    return(
        <div>
            <button onClick={() => navigate(-1)}>назад</button>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur fugiat iusto modi nobis possimus quaerat saepe sint voluptas! Ab, accusamus, aperiam! Dicta eum inventore minima molestias rem tempore, temporibus!
            </p>
        </div>
    )
}

export default Description