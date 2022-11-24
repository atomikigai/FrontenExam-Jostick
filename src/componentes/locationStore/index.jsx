import "./locationStore.css";
import Map from "../../assets/img/map.webp";

const LocationStore = () =>{
    return(
        <div className="location">
            <div className="location-title">
                <h1>Found in over</h1>
                <h1>XXXX stores</h1>
                <p>find a store near you</p>
            </div>
            <div className="location-map">
                <img src={Map} alt="" />
            </div>
        </div>
    )
}

export default LocationStore;