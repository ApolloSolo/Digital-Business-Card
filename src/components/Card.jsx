import "../styles/Card.css"
import Me from "../images/me.jpg"
import Header from "./Header"
import ButtonGroup from "./ButtonGroup"
import About from "./About"
import Footer from "./Footer"

const Card = () => {
    return (
        <div className="card">
            <img className="me-img" src={Me}/>
            <Header />
            <ButtonGroup />
            <About />
            <Footer />
        </div>
    )
}

export default Card;