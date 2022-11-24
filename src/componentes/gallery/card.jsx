import "./card.css";

const Card = (props) =>{
    return(
        props.image ? (
            <div className="cardimage">
                <img src={props.url} alt={props.alt} />
            </div>
        ):(
            <div className={props.style} style={{background: props.color}}>
                <div className="info">
                    <h1>
                        {props.title}
                    </h1>
                    <p>{props.description}</p>
                    <div className="cardlink">
                        { props.link !== undefined ?(
                            <span>{props.linkdescription} <i className="fa-solid fa-arrow-right"></i></span>
                        ):(
                            <span></span>
                        ) 
                        } 
                    </div>
                </div>
            </div>
        )
    )
}

export default Card;