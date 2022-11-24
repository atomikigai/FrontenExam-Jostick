import "./gallery.css";
import Card from "./card";

const Gallery = () =>{

    return(
        <div className="gallery">
            <div className="cards">
                <Card 
                    style="cardinfo"
                    color="#F1EDC0"
                    title={"Discover your true style"} 
                    description={"adipiscing elit, sed do eiusmod tempor incididunt ut labore et."}
                    linkdescription={"explore our trends"}
                    link={"#"}
                />
                <Card style="cardinfo"/>
                <Card image={true} url={"https://media.revistaad.es/photos/60c22bb31cbd49b17897bc00/master/w_1600%2Cc_limit/225338.jpg"}/>
                <Card style="cardinfo"/>
                <Card style="cardinfo"/>
                <Card style="cardinfo"/>
                <Card style="cardinfo"/>
                <Card style="cardinfo"/>
            </div>
        </div>
    )

}

export default Gallery;