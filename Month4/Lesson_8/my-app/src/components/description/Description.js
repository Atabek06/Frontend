import {useNavigate} from "react-router-dom";

function Description () {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate(-1)}>назад</button>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, aspernatur consequatur, culpa deleniti dolor dolores ea eius ex expedita impedit incidunt itaque magnam maxime modi nam officia quae quaerat qui quibusdam reprehenderit tempora ullam unde vel voluptas voluptate voluptatem voluptates! Accusantium architecto, blanditiis et fuga id illum itaque minima?
            </p>
        </div>


    )
}

export default Description;