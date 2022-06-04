import {useLocation} from "react-router-dom";

function PortfolioPage () {
    const location = useLocation();
    console.log(location)

    return (
        <div>
            <h1>Portfolio Page</h1>
        </div>
    )
}
export default PortfolioPage;