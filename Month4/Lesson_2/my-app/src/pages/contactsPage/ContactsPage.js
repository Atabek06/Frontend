import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {Services} from "../../components/services/Services";


function ContactsPage () {
            const services = ["ux/ui", "front-end", "back-end", "flutter", "sql", "puthon"]

    return(
        <div>
            <h2>Contact Page</h2>
            <Header/>
                        <Services services={services}/>

            <Footer/>
        </div>
    )
}

export default ContactsPage