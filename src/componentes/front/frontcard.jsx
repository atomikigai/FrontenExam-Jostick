import "./frontcard.css";

const FrontCard = (props) =>{
    return(
        <div className="frontcard">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.description}
            </p>
            <div className="link">
                <p>{props.linkdescription} <i className="fa-solid fa-arrow-right"></i></p>
            </div>
        </div>
    )
}

export default FrontCard;