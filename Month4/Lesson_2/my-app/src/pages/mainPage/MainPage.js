import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {Services} from "../../components/services/Services";

function MainPage (){
    const services = ["ux/ui", "front-end", "back-end"]
    return(
        <div>
            <h2>Main Page</h2>
            <Header/>
            <Services services={services}/>
            <Footer/>

        </div>
    )
}

export default MainPage;