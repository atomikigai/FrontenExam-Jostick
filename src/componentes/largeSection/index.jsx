import LargeMessage from "./largeMessage";
import "./largeSection.css";
import Img from "../../assets/img/largeImage.webp"
const LargeSection = () =>{
    return(
        <div className="largeSection">
            <LargeMessage url={Img}/>
        </div>
    )
}

export default LargeSection;