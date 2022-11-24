import './home.css';
import Portada from '../front';
import Gallery from '../gallery';
import LargeSection from '../largeSection';
import About from '../about';
import LocationStore from '../locationStore';
import Footer from '../footer';

const Home = () =>{
    return(
        <div className="home">
            <Portada/>
            <Gallery/>
            <LargeSection/>
            <About/>
            <LocationStore/>
            <Footer/>
        </div>
    )
}

export default Home;