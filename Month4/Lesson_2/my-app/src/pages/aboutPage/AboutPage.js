import {Header} from "../../components/header/Header"
import {Services} from "../../components/services/Services";
import {Footer} from "../../components/footer/Footer"


function AboutPage () {
        const services = ["ux/ui", "front-end", "back-end", "flutter", "sql", "puthon"]

    return(
        <div>
            <h2>About Page</h2>
            <Header/>
            <Services services={services}/>
            <Footer/>

        </div>
    )
}

export default AboutPage;