import Card from "../gallery/card";
import "./aboutCard.css";

const AboutCard = (props) =>{
    return(
        <div className={props.style}>
            <div className="aboutImg">
                <img src={props.url} alt={props.alt} />
            </div>
            <Card 
                color={props.color}
                style={props.cardStyle} 
                title={props.title}
                description={props.description}
                link={props.link}
                linkdescription={props.linkdescription}
            />
        </div>
    )
}

export default AboutCard;