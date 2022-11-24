import "./largeMessage.css";
import Card from "../gallery/card";

const LargeMessage = (props) =>{
    return(
        <div className="largeMessage">
            <div className="messageImage">
                <img src={props.url} alt={props.alt} />
            </div>
            <Card 
                style="largeCard"
                color="#D3F1CD" 
                title="Shop anything and everything"
                description="Duis aute irure dolor in
                 reprehenderit in voluptate velit 
                 esse cillum dolore eu fugiat nulla pariatur."
                linkdescription="browse our collections"
                link="https://google.com/"
            />
        </div>
    )
}

export default LargeMessage;