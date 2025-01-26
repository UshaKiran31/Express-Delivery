
import React from "react";
import Hero from "../homepagecomponents/Hero/Hero.jsx";
// import Navbar from "../homepagecomponents/Navbar/Navbar.jsx";
import Services from "../homepagecomponents/Services/Services.jsx";
import Footer from "../homepagecomponents/Footer/Footer.jsx";
import About  from "../homepagecomponents/About/About.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../homepagecomponents/Navbar/Navbar.jsx'

// import Header from "../components/Header"


const Home = () => {
    React.useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 700,
          easing: "ease-in",
          delay: 100,
        });
        AOS.refresh();
      }, []);

    return (
        // <div>
        //     <Header />
        // </div>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden ">
            <Navbar  />
            <Hero />
            <Services />
            <About />
            <Footer />
    </div>
    );
}

export default Home;