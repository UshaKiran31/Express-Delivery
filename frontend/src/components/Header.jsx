
import "../styles/Header.css";
import About from "../assets/About.png";



const Header = () => {
    return (
        <header className="header">
            <img src={About} alt="Background woman" className="header-bg" />
            <div className="header-content">
                <h1>Quick, Reliable And Affordable</h1>
                <h3>It takes just five minutes to send an express parcel anywhere in India via ExpressDelivery. We are always at your service.
                </h3>
                <button>Track</button>
            </div>
           
        </header>
    )
}

export default Header;